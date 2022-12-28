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
} from "native-base";

import { StyleSheet, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme

const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

// export const theme = extendTheme({ config });

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAlert = () => {
    console.log(username);
    return alert("Hello " + username + " Password : " + password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <KeyboardAvoidingView behavior="padding">
        <Center>
          <Image
            size={300}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/WzPwN1m/Minimal-World-Travel-Blog-Suitcase-Logo.png",
            }}
            alt="Alternate Text"
          />
        </Center>

        <VStack space={10} alignItems="center">
          <Box space={5} alignItems="center" style={{ marginBottom: "40%" }}>
            <Heading size="lg">Login</Heading>

            <Box alignItems="center">
              <Text style={style.text}>Username</Text>
              <Input
                mx="3"
                placeholder="Username"
                style={style.Input}
                size="2xl"
                onChangeText={(text) => setUsername(text)}
              />
            </Box>
            <Box alignItems="center">
              <Text style={style.text}>Password</Text>
              <Input
                type="password"
                mx="3"
                placeholder="Password"
                style={style.Input}
                onChangeText={(text) => setPassword(text)}
                size="2xl"
              />
            </Box>

            <HStack space={90} justifyContent="center" style={style.forgot}>
              <Center>
                <Link href="https://docs.nativebase.io" isExternal>
                  <Text color="primary.500" underline fontSize={"xl"}>
                    Register Now
                  </Text>
                </Link>
              </Center>
              <Center>Forgot Password ?</Center>
            </HStack>
            <Box>
              <Center>
                <Button
                  className="LoginButton"
                  onPress={checkAlert}
                  style={style.LoginButton}
                  shadow="9"
                >
                  Login
                </Button>
              </Center>
            </Box>
          </Box>
        </VStack>
        </KeyboardAvoidingView>
      </Center>
    </TouchableWithoutFeedback>
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
    marginRight:"0.5%"
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
    padding: "3%",
    paddingRight: "60%",
    fontSize: "18px",
  },
  forgot: {
    padding: "5%",
  },
});
