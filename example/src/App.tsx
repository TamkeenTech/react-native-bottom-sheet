import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { DefaultSheet } from './sheets/default';

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Bottom Sheet</Text>
      <DefaultSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#999',
    marginBottom: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
