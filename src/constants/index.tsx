import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

export const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const css = StyleSheet.create;
