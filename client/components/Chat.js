import React, { useState } from "react";
import {
  Alert,
  Text,
  Link,
  Center,
  Heading,
  VStack,
  Box,
  Button,
  Image,
  Input,
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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
export default function Chat({ navigation }) {
  return(<Center>
    <Text fontSize="6xl">Chat page</Text>
    <Footer navigation={navigation}/>
  </Center>)
};
