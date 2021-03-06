import * as React from 'react';
import { StickyScreen, Default, Main } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="main"
      >
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="sticky" component={StickyScreen} />
        <Stack.Screen name="default" component={Default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
