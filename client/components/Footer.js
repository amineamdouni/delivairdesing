import {
  VStack,
  HStack,
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Image,
  Center,
} from "native-base";

import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import ActionSheet from "./ActionSheet";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { MaterialCommunityIcons,AntDesign,FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
export default function Footer({ navigation, focused }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [selected, setSelected] = useState('home');

  return (
    <VStack style={style.footer} shadow={15} >
      <HStack justifyContent="space-between" shadow={9}>
        <TouchableOpacity onPress={async() => {
            navigation.navigate('home')
            setSelected("home")}}>
          <MaterialCommunityIcons
            // style={{ marginLeft: 15, marginTop: 10 }}
            name="home-outline"
            color={selected === "home" ? "grey" : "#000000"}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected("chat");
            navigation.navigate('chat')
          }}
        >
          <MaterialCommunityIcons
            // style={{ marginLeft: 30, marginTop: 10 }}
            name="chat-outline"
            color={selected === "chat" ? "grey" : "#000000"}
            size={30}
          />
        </TouchableOpacity>

        <ActionSheet
          navigation={navigation}
          styles={style.middleButton}
          icon={<MaterialCommunityIcons name="plus" size={30} />}
        />
        <TouchableOpacity onPress={() => {
             navigation.navigate("track");
            setSelected("radar")}}>
          <MaterialCommunityIcons
            // style={{ marginLeft: 60, marginTop: 10 }}
            name="radar"
            color={selected === "radar" ? "grey" : "#000000"}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{ 
             
             setSelected("account")
             navigation.navigate('profile')
        }}>
          <MaterialCommunityIcons
            // style={{ marginLeft: 60, marginTop: 10 }}
            name="account-outline"
            color={selected === "account" ? "grey" : "#000000"}
            size={30}
          />
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
}
const style = StyleSheet.create({
  footer: {
    position: "absolute",
    height: 150,
    backgroundColor: "#B1C4CB",
    top: windowHeight - 70,
    width: windowWidth,
    padding:10,
    borderRadius:15,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    
  },
  actionSheet: {
    backgroundColor: "#B1C4CB",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  middleButton: {
    width: 55,
    height: 55,
    backgroundColor: "#E8C6C8",
    borderRadius: 30,
    marginBottom: 200,
  },
});
