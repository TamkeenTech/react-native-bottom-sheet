import React, { FC, useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { DefaultHeader } from '../core';
import { css, DIMENSIONS } from '../constants';

export interface FullSheetProps {
  offset?: number;
  dim?: number;
  show?: boolean;
  onClose?: Function;
  SheetHeaderComponentStyle?: any;
  SheetHeaderComponent?: any;
  children: Array<Element>;
}

export const FullSheet: FC<FullSheetProps> = ({
  offset = 300,
  dim = 0.8,
  show,
  onClose,
  SheetHeaderComponent = DefaultHeader,
  SheetHeaderComponentStyle,
  children,
}) => {
  const translate_y = DIMENSIONS.HEIGHT - offset;
  const [visible, setVisible] = useState(show);
  const opacity = useSharedValue(show ? 1 : 0);
  const y = useSharedValue(show ? translate_y : DIMENSIONS.HEIGHT);

  const close = useCallback(() => {
    opacity.value = withTiming(0, { duration: 500 }, () =>
      runOnJS(setVisible)(false)
    );
    y.value = withTiming(DIMENSIONS.HEIGHT, { duration: 500 });
    onClose && onClose();
  }, [onClose, opacity, y]);

  const open = useCallback(() => {
    opacity.value = withTiming(1, { duration: 500 });
    y.value = withTiming(translate_y, { duration: 500 });
  }, [opacity, translate_y, y]);

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

  return (
    <View style={[styles.container, { height: visible ? '100%' : 0 }]}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.dim_container}
        onPress={close}
      >
        <Animated.View style={[styles.dim, dim_animated_style]} />
      </TouchableOpacity>
      <Animated.View style={[styles.sheet, sheet_animated_style]}>
        <SheetHeaderComponent style={SheetHeaderComponentStyle} />
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = css({
  container: {
    top: 0,
    width: '100%',
    position: 'absolute',
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
    backgroundColor: 'white',
    minHeight: '100%',
  },
});
