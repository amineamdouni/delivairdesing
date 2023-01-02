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
  console.log(navigation);
  return (
    <VStack style={style.footer}>
      <HStack>
        <TouchableOpacity onPress={async() => {
            navigation.navigate('home')
            setSelected("home")}}>
          <MaterialCommunityIcons
            style={{ marginLeft: 15, marginTop: 10 }}
            name="home-outline"
            color={selected === "home" ? "grey" : "#000000"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected("chat");
            navigation.navigate('chat')
          }}
        >
          <MaterialCommunityIcons
            style={{ marginLeft: 30, marginTop: 10 }}
            name="chat"
            color={selected === "chat" ? "grey" : "#000000"}
            size={50}
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
            style={{ marginLeft: 30, marginTop: 10 }}
            name="radar"
            color={selected === "radar" ? "grey" : "#000000"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{ 
             
             setSelected("account")
             navigation.navigate('profile')
        }}>
          <MaterialCommunityIcons
            style={{ marginLeft: 30, marginTop: 10 }}
            name="account"
            color={selected === "account" ? "grey" : "#000000"}
            size={50}
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
    left: 0,
    backgroundColor: "#B1C4CB",
    top: windowHeight - 60,
    width: windowWidth,
  },
  actionSheet: {
    backgroundColor: "#B1C4CB",

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  middleButton: {
    marginLeft: 30,
    width: 55,
    height: 55,
    backgroundColor: "#E8C6C8",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
});
