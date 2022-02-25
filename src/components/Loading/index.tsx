import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
}
