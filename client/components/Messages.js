import React, { useState } from "react";
import {
  Alert,
  Text,
  Link,
  Center,
  Heading,
  VStack,
  Box,
  Avatar,
  Button,
  Image,
  Input,
  ScrollView,
  Flex,
  Divider,
  Icon,
  HStack,
} from "native-base";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Footer from "./Footer";
import { SearchBar } from "react-native-screens";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imaage = {
  uri: "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
};

export default function Messages({ navigation }) {
  return (
    <Box>
      <Box backgroundColor={"#E7C7C8"}>
        <Box style={style.Header}>
          <HStack>
            <AntDesign name='arrowleft'/>
<Center>
            <Heading style={style.logo}>DeliVair</Heading></Center>
          </HStack>
        </Box>
      </Box>
      <Box></Box>
      {/* style={{ alignItems: "flex-end" }} */}
    </Box>
  );
}

const style = StyleSheet.create({
  Header: {
    backgroundColor: "#EBC8CB",
    paddingTop: 80,
    width: 500,
    height: 100,
    left: 0,
    top: -33,
    ImageBackground:
      "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
  },
  search: {
    width: 100,
    height: 30,
  },
  graybox: {
    color: "black",
    backgroundColor: "#EAEAEA",
  },
  searchButtons: {
    color: "black",
    backgroundColor: "#D9D9D9",
    margin: 3,
  },
  Middle: {
    width: 220,
  },
  left: {
    width: 50,
    margin: 10,
  },
  logo: {
    width: 143,
    height: 48,
    left: 12,
    top: 10,
    fontSize: 30,
  },
  inputBox: {
    width: 328,
    height: 466,
    left: 45,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: -230,
  },
  role: {
    width: 60,
    height: 35,
    left: 52,
    top: 30,
    backgroundColor: "#E7C7C8",
    borderRadius: 14,
  },
});
