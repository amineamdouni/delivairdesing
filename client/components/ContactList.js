import React, { useState, useContext } from "react";

import {
  Box,
  Text,
  Pressable,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  useToast,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { UserContext } from "../UserContext";
import Alert from "./Alert";

function Basic() {
  const { contactList, setContactList, contactArray, setcontactArray } =
    useContext(UserContext);

  const [listData, setListData] = useState([
    {
      userName: "John Doe",
      phoneNumber: "+1234567890",
      email: "johndoe@example.com",
      location: "123 Main Street, City, Country",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2823&q=80",
    },
    {
      userName: "Jane Smith",
      phoneNumber: "+9876543210",
      email: "janesmith@example.com",
      location: "456 Elm Avenue, Town, Country",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2459&q=80",
    },
    // Add more objects with dummy data as needed
  ]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item, index }) => (
    <Box
      style={{
        borderTopWidth: 1, // Add a top border with 1 pixel width
        borderBottomWidth: index%2==0?0:1, // Add a bottom border with 1 pixel width
        borderColor: "#FFC8CE", // Specify the border color
      }}
    >
      <Pressable
        onPress={() => console.log("You touched me")}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
      >
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <Avatar
              size="48px"
              source={{
                uri: item.image,
              }}
            />
            <VStack>
              <Text
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                bold
              >
                {item.userName}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                <FontAwesome name="phone" size={14} color="black"></FontAwesome>
                {item.phoneNumber}
              </Text>
              <Text
                fontSize="xs"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                alignSelf="flex-start"
              >
                <Entypo name="email" size={14} color="black"></Entypo>
                {item.email}
              </Text>
              <Text
                fontSize="xs"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                alignSelf="flex-start"
              >
                <MaterialCommunityIcons
                  name="home-map-marker"
                  size={14}
                  color="black"
                ></MaterialCommunityIcons>
                {item.location}
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        ml="auto"
        cursor="pointer"
        bg="coolGray.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon
            as={<Entypo name="dots-three-horizontal" />}
            size="xs"
            color="coolGray.800"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1">
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}
export default Basic;
