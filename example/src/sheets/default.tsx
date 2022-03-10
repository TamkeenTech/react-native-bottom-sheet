import React from 'react';
import { View } from 'react-native';
import { Sheet } from 'react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const DefaultSheet = () => {
  return (
    <Sheet contentContainerStyle={{ paddingHorizontal: 15 }}>
      {/* Child 1 */}
      <View>
        <Label />
        <Paragraph />
      </View>
      {/* Child 2 */}
      <View>
        <Label />
        <Paragraph num={1} />
        <Block />
      </View>
      {/* Child 3 */}
      <View>
        <Label />
        <Paragraph />
        <Block />
      </View>
    </Sheet>
  );
};
