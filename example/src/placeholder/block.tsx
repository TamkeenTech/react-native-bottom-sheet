import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface BlockProps {
  style?: any;
}

export const Block: FC<BlockProps> = ({ style }) => {
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
