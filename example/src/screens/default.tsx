import React, { useCallback, useState } from 'react';
import { Button, Scene } from '../shared';
import { Sheet } from '../sheets';

export const Default = () => {
  const [show, setShow] = useState(false);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <Scene title="Default Sheet" back>
      <Button title="Click Me" onPress={open} />
      <Sheet show={show} onClose={close} />
    </Scene>
  );
};
