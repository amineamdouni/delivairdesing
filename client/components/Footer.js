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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth);
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
export default function Footer({ navigation, focused }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [selected, setSelected] = useState(null);
  return (
    <VStack style={style.footer}>
      <HStack>
        <TouchableOpacity onPress={() => setSelected("home")}>
          <MaterialCommunityIcons
            style={{ marginLeft: 15, marginTop: 10 }}
            name="home"
            color={selected === "home" ? "grey" : "#000000"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("chat")}>
          <MaterialCommunityIcons
            style={{ marginLeft: 30, marginTop: 10 }}
            name="chat"
            color={selected === "chat" ? "grey" : "#000000"}
            size={50}
          />
        </TouchableOpacity>

        <Center>
          <Button onPress={onOpen} style={style.middleButton}>
            <MaterialCommunityIcons
              name="plus"
              color={focused === true ? "grey" : "#000000"}
              size={30}
            />
          </Button>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  Albums
                </Text>
              </Box>
              <Actionsheet.Item onPress={() => navigation.navigate("tabs")}>
                Delete
              </Actionsheet.Item>
              <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
        <TouchableOpacity onPress={() => setSelected("radar")}>
          <MaterialCommunityIcons
            style={{ marginLeft: 30, marginTop: 10 }}
            name="radar"
            color={selected === "radar" ? "grey" : "#000000"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("account")}>
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
    top: windowHeight - 20,
    width: windowWidth,
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
