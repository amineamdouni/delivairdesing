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
import { UserContext } from "../UserContext";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import ActionSheet from "./ActionSheet";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { MaterialCommunityIcons,AntDesign,FontAwesome5 } from "@expo/vector-icons";
import { useState,useContext } from "react";
export default function Footer({ navigation, focused }) {
  const { isOpen, onOpen, onClose } = useDisclose();
 const{  selected, setSelected } =useContext(UserContext)
console.log(navigation);
  return (
    <VStack style={style.footer} shadow={15} >
      <HStack justifyContent="space-between" shadow={9}>
        <TouchableOpacity onPress={async() => {
            navigation.navigate('home')
            setSelected("home")}}>
          <MaterialCommunityIcons
           
            name="home-outline"
            color={selected === "home" ? "black" : "grey"}
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
          
            name="chat-outline"
            color={selected === "chat" ? "black" : "grey"}
            size={30}
          />
        </TouchableOpacity>

        <ActionSheet
          navigation={navigation}
          styles={style.middleButton}
          icon={<MaterialCommunityIcons   name="plus" size={25} />}
        />
        <TouchableOpacity onPress={() => {
             navigation.navigate("track");
            setSelected("radar")}}>
          <MaterialCommunityIcons
            
            name="radar"
            color={selected === "radar" ? "black" : "grey"}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{ 
             
             setSelected("account")
             navigation.navigate('profile')
        }}>
          <MaterialCommunityIcons
            
            name="account-outline"
            color={selected === "account" ? "black" : "grey"}
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
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 15,
    width: windowWidth,
    width: 55,
    height: 55,
    backgroundColor: "#E8C6C8",
    borderRadius: 30,
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
