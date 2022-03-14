import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Button, Scene } from '../shared';

export const Main = () => {
  const { navigate } = useNavigation();
  const navToSticky = useCallback(() => {
    navigate('sticky');
  }, [navigate]);
  const navToDefault = useCallback(() => {
    navigate('default');
  }, [navigate]);

  return (
    <Scene title="React Native Bottom Sheet">
      <Button title="Default" onPress={navToDefault} />
      <Button title="Sticky Sheet" onPress={navToSticky} />
    </Scene>
  );
};
