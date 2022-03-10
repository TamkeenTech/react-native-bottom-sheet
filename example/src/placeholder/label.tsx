import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Label = ({ style }) => {
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
