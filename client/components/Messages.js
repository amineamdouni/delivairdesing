import React, { useEffect, useState } from "react";
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
import axios from "axios";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imaage = {
  uri: "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
};

export default function Messages({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://192.168.104.7:3000/api/messages/getmsg/", {
        from: "63b5490436c92210d680f46d",
        to: "63b54b3536c92210d680f473",
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Box backgroundColor={"#E7C7C8"}>
        <Box style={style.Header}>
          <HStack>
            <AntDesign name="arrowleft" />
            <Center>
              <Heading style={style.logo}>DeliVair</Heading>
            </Center>
          </HStack>
        </Box>
      </Box>
      <Box>
        {data.map((e, i) => {
          if (e.fromSelf === true) {
            return (
              <>
                <Text key={i._id} style={{ backgroundColor: "green" }}>
                  {e.message}
                </Text>
              </>
            );
          } else {
            return (
              <>
                <Text key={i._id} style={{ backgroundColor: "red" }}>
                  {e.message}
                </Text>
              </>
            );
          }
        })}
      </Box>
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
  logo: {
    width: 143,
    height: 48,
    left: 12,
    top: 10,
    fontSize: 30,
  },
});
