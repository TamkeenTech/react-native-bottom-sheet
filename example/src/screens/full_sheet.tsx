import React from 'react';
import { Scene } from '../shared';
import { FullSheet as FullSheetComp } from '../sheets';

export const FullSheet = () => {
  return (
    <Scene title="Full Sheet" back>
      <FullSheetComp />
    </Scene>
  );
};
