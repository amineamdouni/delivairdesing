import React, { useState } from "react";

import {
  Alert,
  Text,
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
  Link,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "native-base";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const checkAlert = () => {
    return alert(username + " " + Email + " " + password + " " + confirm);
  };

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={3}
      flex={2}
    >
      <Image
        style={style.backgroundImage}
        source={{
          uri: "https://wallpapers.com/images/featured/pastel-iphone-nlfoag3cyqt5aoa8.jpg",
        }}
        alt="*"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding">
          <Center>
            <Image
              size={300}
              borderRadius={30}
              style={style.logoSignUp}
              source={{
                uri: "https://i.ibb.co/WzPwN1m/Minimal-World-Travel-Blog-Suitcase-Logo.png",
              }}
              alt="Alternate Text"
            />
          </Center>
          <VStack space={1} alignItems="center">
            <Heading size="lg">SignUp</Heading>
            <Box space={5} alignItems="center" style={{ marginBottom: "40%" }}>
              <Text style={style.Text}>Username</Text>
              <Box alignItems="center">
                <Input
                  mx="4"
                  placeholder="Username"
                  style={style.Input}
                  size="l"
                  shadow="12"
                  onChangeText={(text) => setUsername(text)}
                />
              </Box>
              <Text style={style.Text}>Email</Text>
              <Box alignItems="center">
                <Input
                  mx="4"
                  type="email"
                  placeholder="Email"
                  style={style.Input}
                  size="l"
                  shadow="12"
                  onChangeText={(text) => setEmail(text)}
                />
              </Box>
              <Text style={style.Text}>Password</Text>
              <Box alignItems="center">
                <Input
                  type="password"
                  mx="4"
                  placeholder="Password"
                  style={style.Input}
                  onChangeText={(text) => setPassword(text)}
                  size="l"
                  shadow="12"
                />
              </Box>
              <Text style={style.Text}>Confirm Password</Text>
              <Box alignItems="center">
                <Input
                  type="password"
                  mx="4"
                  placeholder="Confirm Password"
                  style={style.Input}
                  onChangeText={(text) => setConfirm(text)}
                  size="l"
                  shadow="12"
                />
              </Box>
              <Box w={160}>
                <HStack space={10} justifyContent="center" style={style.forgot}>
                  <Divider my={2} />
                  <Text>OR</Text>
                  <Divider my={2} />
                </HStack>
                <Flex
                  mx={3}
                  direction="row"
                  justify="space-evenly"
                  style={style.forgot}
                >
                  <Link href="https://www.facebook.com/">
                    <Icon
                      as={MaterialCommunityIcons}
                      name="facebook"
                      color="coolGray.800"
                      size={30}
                    />
                  </Link>
                  <Divider orientation="vertical" />
                  <Link href="https://gmail.com/">
                    <Icon
                      as={MaterialCommunityIcons}
                      name="google"
                      color="coolGray.800"
                      size={30}
                    />
                  </Link>
                  <Divider orientation="vertical" />
                  <Link href="https://twitter.com/">
                    <Icon
                      as={MaterialCommunityIcons}
                      name="twitter"
                      color="coolGray.800"
                      size={30}
                    />
                  </Link>
                </Flex>
              </Box>

              <Box>
                <Center>
                  <Button
                    className="LoginButton"
                    onPress={checkAlert}
                    style={style.LoginButton}
                  >
                    SignUp
                  </Button>
                </Center>
              </Box>
            </Box>
          </VStack>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Center>
  );
}

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "110%",
    height: "100%",
    justifyContent: "center",
  },
  Input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  LoginButton: {
    backgroundColor: "#9EA7B6",
    marginTop: "20%",
    borderRadius: 5,
    width: "70%",
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 1,
    shadowRadius: 8,
    shadowOffset: { width: 6, height: 5 },
  },
  Text: {
    padding: 5,
    textAlign: "left",
    alignSelf: "flex-start",
    textAlign: "right",
    paddingLeft: 20,
  },
  forgot: {
    marginTop: 10,
  },
  logoSignUp: {
    Top: 5000,
  },
});
