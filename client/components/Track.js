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
export default function Track({ navigation }) {
 return (
   <Center>
     <Text>track page</Text>
     <Footer navigation={navigation}/>
   </Center>
 );
}
