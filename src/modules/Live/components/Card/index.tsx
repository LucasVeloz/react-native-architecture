import React from 'react';
import { IUser } from '../../hooks/useUsers';

import { Container, Image, Title } from './styles';

interface Props {
  data: IUser;
}

export const Card = ({ data }: Props) => {
  return (
    <Container>
      <Image source={{ uri: data.avatar_url }} /> 
      <Title>{data.login}</Title>
    </Container>
  );
}
