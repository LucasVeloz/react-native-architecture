import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LiveRoutes } from '../modules/Live/routes';

const { Navigator, Screen } = createNativeStackNavigator();

export const UnloggedRoutes = () => {
  return (
    <Navigator>
      <Screen name="Main" component={LiveRoutes} />
    </Navigator>
  );
}
