import React from 'react';
import { Sheet as SheetComp } from '@tamkeentech/react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const Sheet = ({ show, onClose }) => {
  return (
    <SheetComp
      contentContainerStyle={{ paddingHorizontal: 15 }}
      show={show}
      onClose={onClose}
    >
      <Label />
      <Paragraph />
      <Block />
    </SheetComp>
  );
};
