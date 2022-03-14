import React, { FC, useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { DefaultHeader } from '../core';
import { css, DIMENSIONS } from '../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';

export interface SheetProps {
  offset?: number;
  dim?: number;
  show?: boolean;
  onClose?: Function;
  SheetHeaderComponentStyle?: any;
  contentContainerStyle?: any;
  SheetHeaderComponent?: any;
  children: Array<Element>;
}

export const Sheet: FC<SheetProps> = ({
  offset = 0,
  dim = 0.8,
  show,
  onClose: onCloseProps,
  SheetHeaderComponent = DefaultHeader,
  contentContainerStyle,
  SheetHeaderComponentStyle,
  children,
}) => {
  const [visible, setVisible] = useState(show);
  const opacity = useSharedValue(show ? 1 : 0);
  const y = useSharedValue(DIMENSIONS.HEIGHT);
  const [translate_y, setTranslateY] = useState(0);

  const onClose = useCallback(() => {
    setVisible(false);
    onCloseProps && onCloseProps();
  }, [onCloseProps]);

  const close = useCallback(() => {
    opacity.value = withTiming(0, { duration: 500 }, () => runOnJS(onClose)());
    y.value = withTiming(DIMENSIONS.HEIGHT, { duration: 500 });
  }, [onClose, opacity, y]);

  const open = useCallback(() => {
    opacity.value = withTiming(1, { duration: 500 });
    y.value = withTiming(translate_y - offset, { duration: 500 });
  }, [opacity, translate_y, offset, y]);

  useEffect(() => {
    show ? setVisible(true) : close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    visible && open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const dim_animated_style = useAnimatedStyle(() => ({
    opacity: interpolate(opacity.value, [0, 1], [0, dim]),
  }));

  const sheet_animated_style = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
  }));

  const _onLayout = useCallback(({ nativeEvent }) => {
    const { height } = nativeEvent.layout;
    setTranslateY(DIMENSIONS.HEIGHT - height);
  }, []);

  const eventContainerHandler = useAnimatedGestureHandler({
    onActive: (event: any) => {
      y.value = Math.max(translate_y + event.translationY, translate_y - 30);
    },
    onEnd: (event) => {
      const { translationY } = event;
      y.value = withSpring(translate_y);
      // if (translationY > 20) {
      //   opacity.value = withTiming(0, { duration: 500 }, () =>
      //     runOnJS(onClose)()
      //   );
      //   y.value = withTiming(DIMENSIONS.HEIGHT, { duration: 500 });
      // }
    },
  });

  const eventSheetHandler = useAnimatedGestureHandler({
    onActive: (event: any) => {
      y.value = Math.max(translate_y + event.translationY, translate_y - 30);
    },
    onEnd: (event) => {
      const { translationY } = event;
      y.value = withSpring(translate_y);
      if (translationY > 20) {
        opacity.value = withTiming(0, { duration: 500 }, () =>
          runOnJS(onClose)()
        );
        y.value = withTiming(DIMENSIONS.HEIGHT, { duration: 500 });
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={eventContainerHandler}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: visible ? 0 : DIMENSIONS.HEIGHT }],
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.dim_container}
          onPress={close}
        >
          <Animated.View style={[styles.dim, dim_animated_style]} />
        </TouchableOpacity>
        <PanGestureHandler onGestureEvent={eventSheetHandler}>
          <Animated.View style={[styles.sheet, sheet_animated_style]}>
            <View onLayout={_onLayout}>
              <SheetHeaderComponent style={SheetHeaderComponentStyle} />
              <View style={[styles.content, contentContainerStyle]}>
                {children}
              </View>
            </View>
            <View style={styles.filler} />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = css({
  container: {
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  dim_container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  dim: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#222222bb',
  },
  sheet: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '100%',
  },
  content: {
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  filler: {
    flex: 1,
    backgroundColor: 'white',
  },
});
