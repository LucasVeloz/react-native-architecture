import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LiveRoutes } from '../modules/Live/routes';

const { Navigator, Screen } = createNativeStackNavigator();

export const LoggedRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={LiveRoutes} />
    </Navigator>
  );
}
