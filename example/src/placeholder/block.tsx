import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Block = ({ style }) => {
  return <View style={[styles.block, style]} />;
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 120,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    marginVertical: 10,
  },
});
