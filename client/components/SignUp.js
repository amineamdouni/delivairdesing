import React, { useState } from "react";
import {
  Alert,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  VStack,
  Box,
  Button,
  Image,
  Input,
  Stack,
  Left,
  Icon,
} from "native-base";
import Login from "./Login";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme

const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

// export const theme = extendTheme({ config });

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
      px={2}
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
              source={{
                uri: "https://i.ibb.co/WzPwN1m/Minimal-World-Travel-Blog-Suitcase-Logo.png",
              }}
              alt="Alternate Text"
              style={style.logoSignUp}
            />
          </Center>

          <Heading style={{ paddingBottom: "10%" }} size="lg">
            Create an account :
          </Heading>
          <VStack alignItems="center" style={{ marginBottom: "60%" }}>
            <Box space={10} alignItems="left">
              <Text style={style.text}>Username</Text>
              <Box alignItems="center">
                <Input
                  mx="3"
                  placeholder="Username"
                  style={style.Input}
                  size="2xl"
                  onChangeText={(text) => setUsername(text)}
                />
              </Box>

              <Text style={style.text}>Email</Text>
              <Box alignItems="center">
                <Input
                  type="email"
                  mx="3"
                  placeholder="Email"
                  style={style.Input}
                  size="2xl"
                  onChangeText={(text) => setEmail(text)}
                />
              </Box>

              <Text style={style.text}>Password</Text>
              <Box alignItems="center">
                <Input
                  type="password"
                  mx="3"
                  placeholder="Password"
                  style={style.Input}
                  onChange={() => console.log("clicked")}
                  size="2xl"
                  onChangeText={(text) => setPassword(text)}
                />
              </Box>

              <Text style={style.text}>Confirm Password</Text>
              <Box alignItems="center">
                <Input
                  type="password"
                  mx="3"
                  placeholder="Confirm Password"
                  style={style.Input}
                  onChange={() => console.log("clicked")}
                  size="2xl"
                  onChangeText={(text) => setConfirm(text)}
                />
              </Box>
            </Box>
            <Box>
              <Center>
                <Button
                  className="LoginButton"
                  onPress={checkAlert}
                  style={style.LoginButton}
                  shadow="9"
                >
                  SignUp
                </Button>
              </Center>
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
    borderWidth: "1px",
    borderRadius: "12%",
    marginRight: "0.5%",
  },
  LoginButton: {
    display: "relative",
    backgroundColor: "#9EA7B6",
    marginTop: "20%",
    borderRadius: "12%",
    alignItems: "left",
    width: "70%",
  },
  text: {
    textAlign: "left",
    padding: "3%",
    fontSize: "18px",
    textAlign: "auto",
  },
  forgot: {
    padding: "5%",
  },
  logoSignUp: {
    marginTop: "40%",
    position: "center",
  },
});
