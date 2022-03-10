import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface LabelProps {
  style?: any;
}

export const Label: FC<LabelProps> = ({ style }) => {
  return <View style={[styles.label, style]} />;
};

const styles = StyleSheet.create({
  label: {
    width: 65,
    height: 14,
    backgroundColor: '#9ddcf2',
    borderRadius: 5,
    marginVertical: 5,
  },
});
