import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = ({ title, title_style, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.title, title_style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#30bff2',
    backgroundColor: 'transparent',
    padding: 10,
    width: 120,
    marginVertical: 5,
  },
  title: {
    color: '#30bff2',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
