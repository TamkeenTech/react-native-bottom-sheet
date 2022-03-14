import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Button, Scene } from '../shared';

export const Main = () => {
  const { navigate } = useNavigation();
  const navToPersistent = useCallback(() => {
    navigate('default');
  }, [navigate]);
  const navToFullSheet = useCallback(() => {
    navigate('full');
  }, [navigate]);

  return (
    <Scene title="React Native Bottom Sheet">
      <Button title="Persistant" onPress={navToPersistent} />
      <Button title="Full Screen" onPress={navToFullSheet} />
    </Scene>
  );
};
