import React, { FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { css } from '../constants';

export interface DefaultHeaderProps {
  toggleModal: Function;
  opened: boolean;
}

export const DefaultHeader: FC<DefaultHeaderProps> = ({ toggleModal }) => {
  const onPress = useCallback(() => {
    toggleModal && toggleModal();
  }, [toggleModal]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.indicator_container}>
          <View style={styles.indicator} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = css({
  container: {
    backgroundColor: '#FFF',
    height: 50,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  indicator_container: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 6,
    borderRadius: 4,
    width: 60,
    backgroundColor: '#99999944',
  },
});
