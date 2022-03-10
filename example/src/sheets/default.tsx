import React from 'react';
import { ScrollView, View } from 'react-native';
import { Sheet } from 'react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const DefaultSheet = () => {
  return (
    <Sheet contentContainerStyle={{ paddingHorizontal: 15 }}>
      <View>
        <Label />
        <Paragraph />
      </View>
      <View>
        <Label />
        <Paragraph num={1} />
        <Block />
      </View>
      <View>
        <Label />
        <Paragraph />
        <Block />
      </View>
    </Sheet>
  );
};
