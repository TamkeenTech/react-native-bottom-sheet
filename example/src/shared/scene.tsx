import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './button';
import { useNavigation } from '@react-navigation/core';

export const Scene = ({ children, title, back }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.scene}>
      <Text style={styles.text}>{title || 'React Native Bottom Sheet'}</Text>
      {children}
      {back ? (
        <Button
          title_style={styles.back_title}
          style={styles.back}
          title="Back"
          onPress={goBack}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontSize: 18,
    color: '#d3d3d3',
    letterSpacing: 1,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  back: {
    borderColor: '#ff576b',
    marginTop: 20,
  },
  back_title: {
    color: '#f23047',
  },
});
