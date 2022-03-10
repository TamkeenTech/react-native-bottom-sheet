import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Paragraph = ({ style, num = 2 }) => {
  return (
    <View style={[styles.container, style]}>
      {new Array(num).fill(1).map((_, index) => (
        <View key={index} style={[styles.row]} />
      ))}
      <View style={[styles.row, styles.last]} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginVertical: 5,
  },
  last: {
    width: '65%',
  },
  container: {
    marginVertical: 10,
  },
});
