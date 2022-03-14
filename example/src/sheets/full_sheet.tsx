import React from 'react';
import { FullSheet as FullComp } from '@tamkeentech/react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const FullSheet = ({ show, onClose }) => {
  return (
    <FullComp
      contentContainerStyle={{ paddingHorizontal: 15 }}
      show={show}
      onClose={onClose}
    >
      <Label />
      <Paragraph />
      <Block />
    </FullComp>
  );
};
