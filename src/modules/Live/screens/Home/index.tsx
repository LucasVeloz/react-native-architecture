import React from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useUsersQuery } from '../../hooks';



export const Home = () => {

  const { data, isLoading } = useUsersQuery();


  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {React.Children.toArray(data?.data.map(item => (
        <View style={styles.item}>
          <Image source={{ uri: item.avatar_url }} style={styles.image} />
          <Text style={styles.text}>{item.login}</Text>
        </View>
      )))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 20
  },
  text: {
    fontSize: 20
  }
})
