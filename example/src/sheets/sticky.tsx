import React from 'react';
import { View } from 'react-native';
import { StickySheet } from '@tamkeentech/react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const Sticky = () => {
  return (
    <StickySheet delay={800} contentContainerStyle={{ paddingHorizontal: 15 }}>
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
    </StickySheet>
  );
};
