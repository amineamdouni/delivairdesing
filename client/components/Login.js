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

const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAlert = () => {
    console.log(username);
    return alert("Hello " + username + " Password : " + password);
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
              source={{
                uri: "https://i.ibb.co/WzPwN1m/Minimal-World-Travel-Blog-Suitcase-Logo.png",
              }}
              alt="Alternate Text"
            />
          </Center>
          <VStack space={10} alignItems="center">
            <Heading size="lg">Login</Heading>
            <Box space={5} alignItems="center" style={{ marginBottom: "40%" }}>
              <Text style={style.Text}>Username</Text>

              <Input
                mx="4"
                placeholder="Username"
                style={style.Input}
                size="l"
                onChangeText={(text) => setUsername(text)}
              />

              <Text style={style.Text}>Password</Text>

              <Input
                type="password"
                mx="4"
                placeholder="Password"
                style={style.Input}
                onChangeText={(text) => setPassword(text)}
                size="l"
              />

              <HStack space={90} justifyContent="center" style={style.forgot}>
                <Center>
                  <Link onPress={()=>{navigation.navigate('signup')}}>
                    <Text color="primary.500" underline fontSize={"15px"}>
                      Register Now
                    </Text>
                  </Link>
                </Center>
                <Center fontSize={"15px"}>Forgot Password ?</Center>
              </HStack>

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
                    onPress={()=>{navigation.navigate('tabs')}}
                    style={style.LoginButton}
                  >
                    Login
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
    backgroundColor: "",
  },
  Input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
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
    padding: 5,
  },
  logoSignUp: {
    marginTop: 40,
  },
});
