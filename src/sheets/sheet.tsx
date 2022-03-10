import React, { FC, useCallback, useState } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { css, DIMENSIONS, STATUSBAR_HEIGHT } from '../constants';

import { DefaultHeader } from '../core';

const BOUNCE_BOTTOM_PADDING = 20;

interface SheetProps {
  childOffset?: number;
  offset?: number;
  onUpdate?: Function;
  style?: any;
  contentContainerStyle?: any;
  ModalHeaderComponentStyle?: any;
  ModalHeaderComponent?: any;
  children: Array<Element>;
}

export const Sheet: FC<SheetProps> = ({
  offset = 0,
  children,
  childOffset = 0,
  contentContainerStyle,
  style,
  onUpdate,
  ModalHeaderComponent = DefaultHeader,
  ModalHeaderComponentStyle,
}) => {
  const y = useSharedValue(DIMENSIONS.HEIGHT);
  const [max_height, setMaxHeight] = useState(DIMENSIONS.HEIGHT);
  const [opened, setOpened] = useState(false);
  const [header_height, setheaderHeight] = useState(0);
  const [breakpoints, setBreakPoints] = useState(
    new Array(children ? children.length : 0).fill(1)
  );

  const open = useCallback(() => {
    setOpened(true);
    y.value = withSpring(DIMENSIONS.HEIGHT - max_height, {
      damping: 13,
    });
  }, [max_height, y]);

  const close = useCallback(() => {
    setOpened(false);
    y.value = withSpring(DIMENSIONS.HEIGHT - breakpoints[0], {
      damping: 13,
    });
  }, [breakpoints, y]);

  const toggleModal = useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);

  const onChange = useCallback(
    ({ index, is_end_reached, ...rest }) => {
      onUpdate && onUpdate({ index, is_end_reached, ...rest });
      !index && setOpened(false);
      is_end_reached && setOpened(true);
    },
    [onUpdate]
  );

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = y.value;
    },
    onActive: (event: any, ctx: any) => {
      y.value = Math.max(
        ctx.startY + event.translationY,
        DIMENSIONS.HEIGHT - max_height - BOUNCE_BOTTOM_PADDING
      );
    },
    onEnd: () => {
      const needle = Math.round(DIMENSIONS.HEIGHT - y.value);
      const closest = breakpoints.reduce(
        (prev, current, index, arr) => {
          const sub = arr.slice(0, index);
          const current_height = sub.reduce((p, c) => p + c, 0) + current;
          return Math.abs(prev.height - needle) <
            Math.abs(current_height - needle)
            ? prev
            : { height: current_height, index };
        },
        { index: 0, height: breakpoints[0] }
      );
      // RUN SIDE EFFECTS
      const is_end_reached = closest.index === breakpoints.length - 1;
      runOnJS(onChange)({
        index: closest.index,
        height: closest.height,
        is_end_reached,
      });
      let new_value = DIMENSIONS.HEIGHT - closest.height;
      closest.index &&
        closest.index + 1 !== breakpoints.length &&
        (new_value -= childOffset);
      y.value = withSpring(new_value);
    },
  });

  const onLayout = useCallback(({ nativeEvent }) => {
    const { height } = nativeEvent.layout;
    setMaxHeight(height - BOUNCE_BOTTOM_PADDING);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: y.value - STATUSBAR_HEIGHT - header_height - offset },
      ],
    };
  });

  const onChildLayout = useCallback(
    (index, height) => {
      /* INIT MODAL */
      if (!index && breakpoints[index] === 1) {
        y.value = withSpring(Math.round(DIMENSIONS.HEIGHT - height), {
          damping: 13,
        });
      }
      setBreakPoints((prev) =>
        prev.map((val, i) => (index === i ? height : val))
      );
    },
    [breakpoints, y]
  );

  const onHeaderLayout = useCallback(({ nativeEvent }) => {
    const { height } = nativeEvent.layout;
    setheaderHeight(height);
  }, []);

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.modal, style, animatedStyle]}>
        {ModalHeaderComponent ? (
          <View
            style={[styles.header, ModalHeaderComponentStyle]}
            onLayout={onHeaderLayout}
          >
            <ModalHeaderComponent toggleModal={toggleModal} opened={opened} />
          </View>
        ) : null}
        <View
          style={[styles.content, contentContainerStyle]}
          onLayout={onLayout}
        >
          {React.Children.map(children, (child, index) => {
            return (
              <Section index={index} onLayout={onChildLayout}>
                {child}
              </Section>
            );
          })}
          <View style={styles.bounce_padding} />
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Section: FC<any> = ({ index, onLayout, children }) => {
  const _onLayout = useCallback(
    ({ nativeEvent }) => {
      const { height } = nativeEvent.layout;
      onLayout(index, height);
    },
    [index, onLayout]
  );
  return (
    <View style={styles.section} onLayout={_onLayout}>
      {children}
    </View>
  );
};

const styles = css({
  modal: {
    top: 0,
    position: 'absolute',
    minHeight: '100%',
    width: '100%',
  },
  header: {
    top: 2,
  },
  content: {
    backgroundColor: '#FFF',
  },
  section: {
    paddingBottom: 15,
  },
  bounce_padding: {
    height: BOUNCE_BOTTOM_PADDING,
    backgroundColor: 'white',
  },
});
