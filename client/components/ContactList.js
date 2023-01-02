
import React, { useState } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';

const friends = [
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '123-456-7890',
    country: 'United States',
    profileImage: 'https://picsum.photos/200',
  },
  {
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    phone: '098-765-4321',
    country: 'Canada',
    profileImage: 'https://picsum.photos/200',
  },  {
    name: 'amine ',
    email: 'amine@gmail.com',
    phone: '123-456-7890',
    country: 'tunisia',
    profileImage: 'https://picsum.photos/200',
  }
  // Add more friends here
];

const FriendItem = ({ name, email, phone, country, profileImage, onDelete }) => (
  <View style={styles.friendItem}>
    <Image source={{ uri: profileImage }} style={styles.profileImage} />
    <View style={styles.friendInfo}>
      <Text style={styles.friendName}>{name}</Text>
      <Text style={styles.friendEmail}>Email: {email}</Text>
      <Text style={styles.friendPhone}>Phone: {phone}</Text>
      <Text style={styles.friendCountry}>Country: {country}</Text>
    </View>
    <Button title="Delete" onPress={onDelete} />
  </View>
);

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState(friends);

  const handleDelete = email => {
    setFriendsList(friendsList.filter(friend => friend.email !== email));
  };

  return (
    <FlatList
      data={friendsList}
      renderItem={({ item }) => (
        <FriendItem {...item} onDelete={() => handleDelete(item.email)} />
      )}
      keyExtractor={item => item.email}
    />
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: '#ccc',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  friendEmail: {
    fontSize: 16,
  },
  friendPhone: {
    fontSize: 16,
  },
  friendCountry: {
    fontSize: 16,
  },
});

export default FriendsList;




