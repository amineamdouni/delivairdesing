import {
 
  Button,
  Actionsheet,
  useDisclose,
  Text,
 
  Center,
} from "native-base";

import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { useState } from "react";
export default function ActionSheet({ navigation, focused,icon,styles }) {
  const { isOpen, onOpen, onClose } = useDisclose();
 console.log(navigation,'navigat');
  return (
    <Center>
      <Button onPress={onOpen} style={styles}>
        {icon}
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={style.actionSheet}>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<MaterialCommunityIcons name="home-outline" size={26} />}
            onPress={() => navigation.navigate("home")}
          >
            <TouchableOpacity>
              <Text>Home</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<MaterialCommunityIcons name="chat" size={26} />}
            onPress={() => navigation.navigate("chat")}
          >
            <TouchableOpacity>
              <Text>Chat</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<MaterialCommunityIcons name="account" size={26} />}
            onPress={() => navigation.navigate("profile")}
          >
            <TouchableOpacity>
              <Text>Profile</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<MaterialCommunityIcons name="radar" size={26} />}
            onPress={() => navigation.navigate("track")}
          >
            <TouchableOpacity>
              <Text>Track</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<MaterialCommunityIcons name="history" size={26} />}
            onPress={() => navigation.navigate("history")}
          >
            <TouchableOpacity>
              <Text>History</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<FontAwesome5 name="user-friends" size={26} />}
            onPress={() => navigation.navigate("contact")}
          >
            <TouchableOpacity>
              <Text>Contact List</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={
              <MaterialCommunityIcons name="text-box-plus-outline" size={26} />
            }
            onPress={() => navigation.navigate("addpost")}
          >
            <TouchableOpacity>
              <Text>Add Post</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
          <Actionsheet.Item
            backgroundColor={"#B1C4CB"}
            startIcon={<AntDesign name="form" size={26} />}
            onPress={() => navigation.navigate("reclamation")}
          >
            <TouchableOpacity>
              <Text>reclamation</Text>
            </TouchableOpacity>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
const style = StyleSheet.create({
  
  actionSheet: {
    backgroundColor: "#B1C4CB",

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
 
});
