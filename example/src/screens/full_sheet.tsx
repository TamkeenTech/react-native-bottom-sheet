import React, { useCallback, useState } from 'react';
import { Button, Scene } from '../shared';
import { FullSheet as FullSheetComp } from '../sheets';

export const FullSheet = () => {
  const [show, setShow] = useState(false);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <Scene title="Full Sheet" back>
      <Button title="Click Me" onPress={open} />
      <FullSheetComp show={show} onClose={close} />
    </Scene>
  );
};
