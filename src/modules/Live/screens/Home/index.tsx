import React from 'react';

import { useUsersQuery } from '../../hooks';
import { Card } from '../../components';
import { Loading } from '../../../../components/Loading';
import { Container } from './styles';
import { FlatList } from 'react-native';



export const Home = () => {

  const { data, isLoading } = useUsersQuery();


  if (isLoading) return <Loading />;

  return (
    <Container>
      <FlatList
        data={data?.data}
        renderItem={({ item }) => (
          <Card data={item} />
          )}
      />
    </Container>
  );
}
