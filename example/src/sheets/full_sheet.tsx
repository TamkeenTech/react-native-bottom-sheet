import React from 'react';
import { FullSheet as FullComp } from '@tamkeentech/react-native-bottom-sheet';

export const FullSheet = ({ show, onClose }) => {
  return <FullComp show={show} onClose={onClose} />;
};
