import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  Alert,
  Text,
  Heading,
  VStack,
  Box,
  Avatar,
  Input,
  Icon,
  HStack,
} from "native-base";
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "./Footer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imaage = {
  uri: "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
};
// import { UserContext } from "../UserContext";
// import axios from "axios";

import { TouchableOpacity } from "react-native";
export default function Chat({ navigation }) {
  // const { user, setTo, contactList } = useContext(UserContext);
  const [to, setTo] = useState();
  const [allUsers, getAllUsers] = useState([
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      lastMessage: "Noted, 10 AM by arrivals with a blue bag. Confirming.",
      online: true,
      lastOnline: "2023-08-30 10:15:00",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",

      lastMessage: "Sure, let's meet tomorrow!",
      online: true,
      lastOnline: "2023-08-29 18:30:00",
    },
    {
      name: "Alex Johnson",
      image: "https://picsum.photos/200/300",
      lastMessage: "Sounds good to me!",
      online: true,
      lastOnline: "2023-08-30 08:45:00",
    },
    {
      name: "Emily Brown",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80",
      lastMessage: "I'm sorry, but I won't be able to make it.",
      online: false,
      lastOnline: "2023-08-29 22:20:00",
    },
    {
      name: "Michael Lee",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      lastMessage: "Looking forward to it!",
      online: true,
      lastOnline: "2023-08-30 09:10:00",
    },
    {
      name: "Sophia Martinez",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      lastMessage: "I can't make it this time, sorry.",
      online: false,
      lastOnline: "2023-08-29 20:05:00",
    },
    {
      name: "Daniel Wilson",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2823&q=80",
      lastMessage: "Let's do it then!",
      online: true,
      lastOnline: "2023-08-30 11:30:00",
    },
    {
      name: "Olivia Taylor",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2459&q=80",
      lastMessage: "Can we reschedule? I have a conflicting appointment.",
      online: false,
      lastOnline: "2023-08-29 23:45:00",
    },
  ]);
  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);
  // console.log(allUsers);

  // useEffect(() => {
  //   forceUpdate();
  // }, [user]);
  // console.log(contactList);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://192.168.1.107:3000/api/users/allusers/63bc585f004eb697059c2a7d"
  //     )
  //     .then((res) => {
  //       console.log(res.data.filter((e) => contactList.includes(e.email)));
  //       getAllUsers(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Box style={{ backgroundColor: "#FFC8CE" }}>
      <Box style={styles.header}>
        <Heading fontSize="2xl" style={styles.heading}>
          Messages
        </Heading>
      </Box>
      <Box style={styles.container}>
        <Box style={styles.containerTop}>
          <Box style={styles.SearchBar}>
            <Input
              variant="rounded"
              placeholder="Search"
              backgroundColor={"rgba(0,0,0,0.1)"}
              width="100%"
              mx="4"
              right={4}
              borderColor="white"
              fontSize="lg"
              py="1"
              px="2"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="4"
                  color="gray.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </Box>

          <ScrollView horizontal={true}>
            {allUsers.filter(e=>e.online).map((e) => {
              return (
                <Box style={styles.contact}>
                  <HStack>
                    <Avatar
                      marginLeft={5}
                      size="lg"
                      source={{
                        uri: e.image,
                      }}
                    >
                      <Avatar.Badge bg="green.500"/>
                    </Avatar>
                  </HStack>
                </Box>
              );
            })}
          </ScrollView>
        </Box>
        <ScrollView useWindowScrolling={true}>
          <Box height={windowHeight}>
            {allUsers.map((e) => {
              return (
                <VStack>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("messages");
                    }}
                  >
                    <HStack style={styles.message} key={e._id}>
                      {e.image ? (
                        <Avatar
                          marginLeft={5}
                          size="lg"
                          source={{
                            uri: e.image,
                          }}
                        >
                          {e.online && <Avatar.Badge bg="green.500" />}
                        </Avatar>
                      ) : (
                        <Avatar
                          marginLeft={5}
                          size="lg"
                          source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aSUcU-KC_ZGl1KIFES1pwRe4YOMv2gPx_g&usqp=CAU",
                          }}
                        ></Avatar>
                      )}
                      <VStack style={styles.textContainer}>
                        <Text fontWeight={700} fontSize={20}>
                          {e.name}
                        </Text>
                        <Text
                          style={{ maxWidth: 250 }}
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          fontWeight={300}
                          fontSize={20}
                        >
                          {e.lastMessage}
                        </Text>
                      </VStack>
                    </HStack>
                  </TouchableOpacity>
                </VStack>
              );
            })}
          </Box>
        </ScrollView>
      </Box>
      <Footer navigation={navigation} />
    </Box>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginStart: 10,
    fontWeight: "bold",
    color: "white",
  },
  containerTop: {
    backgroundColor: "white",
    borderRadius: 40,
  },
  message: {
    paddingTop:5,
    paddingBottom: 10,
  },
  header: {
    backgroundColor: "#FFC8CE",
    width: windowWidth,
    top: windowHeight - (windowHeight - 60),
    height: windowHeight - (windowHeight - 80),
    marginBottom: 30,
  },
  container: {
    backgroundColor: "#F5F6F1",
    height: windowHeight,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  contact: {
    marginTop: 10,
    marginLeft: 5,
    paddingBottom:10
  },
  textContainer: {
    paddingStart: 20,
  },
  SearchBar: { marginTop: 20, paddingEnd: 10, paddingStart: 10 },
});
