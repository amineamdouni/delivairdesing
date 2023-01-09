
import React, { useCallback, useContext, useState,useEffect } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext';
import {
  Entypo,
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Box, Center, Divider, Flex, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const friends = [
  {
    name: 'Amine Amdouni',
    email: 'amouna@gmail.com',
    phone: '123-456-7890',
    country: 'United States',
    profileImage: 'https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    phone: '098-765-4321',
    country: 'Canada',
    profileImage: 'https://picsum.photos/200',
  },  {
    name: 'Wiem Mimouni',
    email: 'mimouni@gmail.com',
    phone: '123-456-7890',
    country: 'tunisia',
    profileImage: 'https://res.cloudinary.com/duqxezt6m/image/upload/v1671620160/me_kosu6u_p95f3v.jpg',
  },
  {
    name: 'Mahdi Dissem',
    email: 'midox@gmail.com',
    phone: '123-456-7890',
    country: 'tunisia',
    profileImage: 'https://cdn.discordapp.com/attachments/1030292601489854626/1059141724955484200/1FCD701D-518F-48E5-98DF-F99CC2DB91C4.jpg',
  },
  {
    name: 'Abderrahim Ouertani',
    email: 'abdouu@gmail.com',
    phone: '123-456-7890',
    country: 'tunisia',
    profileImage: 'https://cdn.discordapp.com/attachments/1030292601489854626/1059141955470229585/D7C1F79F-0816-4479-9397-1CF6493F9CD7.jpg',
  },

  
  
  // Add more friends here
];

const FriendItem = ({ name, email, phone, country, profileImage, onDelete }) => (
  <View style={styles.friendItem}>
    <Image source={{ uri: profileImage }} style={styles.profileImage} />
    <View style={styles.friendInfo}>
      <Text style={styles.friendName}>{name}</Text>
      <Text style={styles.friendEmail}><Entypo name="email" size={14} color="black" ></Entypo> : {email}</Text>
   <Text style={styles.friendPhone}> <FontAwesome name="phone" size={14} color="black" ></FontAwesome> : {phone}</Text>
      <Text style={styles.friendCountry}><MaterialCommunityIcons name="home-map-marker" size={14} color="black" ></MaterialCommunityIcons> : {country}</Text>
    </View>
    <AntDesign name="deleteuser"  color={"#e7c7c8"}  size={19}onPress={onDelete} ></AntDesign>
  </View>
);

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState(friends);
const { user, connected } = useContext(UserContext);
const [, updateState] = useState();
const forceUpdate = useCallback(() => updateState({}), []);

useEffect(() => {
  forceUpdate();
  console.log(user, "ContactList");
}, [user]);
  const handleDelete = email => {
    setFriendsList(friendsList.filter(friend => friend.email !== email));
  };

  return (
    <Box  >
     
    <Center backgroundColor={"#FFC8CE"} h={50}  ><HStack>
        <TouchableOpacity><Text fontSize={20}>Contact list</Text></TouchableOpacity>
        <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text fontSize={20}>Pending requests</Text>
        </HStack>
      </Center>
    <FlatList
      data={friendsList}
      renderItem={({ item }) => (
        <FriendItem {...item} onDelete={() => handleDelete(item.email)} />
      )}
      keyExtractor={item => item.email}
    /></Box>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderRadius:30,
    padding: 20,
    backgroundColor: 'white',
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
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#5FC8C0',
  }
});

export default FriendsList;




