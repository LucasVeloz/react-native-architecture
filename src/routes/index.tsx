import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { LoggedRoutes } from './logged.routes';
import { UnloggedRoutes } from './unlogged.routes';


export const Routes = () => {
  const isLogged = true;
  return (
    <NavigationContainer>
      {isLogged ? <LoggedRoutes /> : <UnloggedRoutes />}
    </NavigationContainer>
  );
}
