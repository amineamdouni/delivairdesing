import React, { useContext, useState } from "react";

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
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//--------- We need to secure this amine !------
const firebaseConfig = {
  apiKey: "AIzaSyCVBbACohSkuUr0FntAmt9BvMUK-RkpY-E",
  authDomain: "delivair-959e9.firebaseapp.com",
  projectId: "delivair-959e9",
  storageBucket: "delivair-959e9.appspot.com",
  messagingSenderId: "1084409904306",
  appId: "1:1084409904306:web:03f5e420eb889f115d1dab",
};

const app = initializeApp(firebaseConfig);

//-------------------------
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth();
import { UserContext } from "../UserContext";
import axios from "axios";
const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

export default function Login({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log("firebase succ");
      axios
        .post("http://192.168.104.13:3000/api/users/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result.data,'result email');
          axios
            .get(`http://192.168.104.13:5000/users/${result.data.user.email}`)
            .then((res) => {
              console.log(res.data, "res.data");
              setUser(res.data);
              navigation.navigate("profile");
              alert("welcome " + email);
            });
        })
        .catch((err) => console.log(err))
        .catch((err) => {
          alert("Please check your credentials or you may not be signed in");
        });
    });
  };
  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("password reset email has been sent successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Please enter a valid email");
    }
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
              <Text style={style.Text}>Email</Text>

              <Input
                mx="4"
                placeholder="Email"
                style={style.Input}
                size="l"
                onChangeText={(text) => setEmail(text)}
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
                  <Link
                    onPress={() => {
                      navigation.navigate("signup");
                    }}
                  >
                    <Text color="primary.500" underline fontSize={"15px"}>
                      Register Now
                    </Text>
                  </Link>
                </Center>

                <TouchableOpacity
                  style={{
                    margin: 10,
                    alignItems: "center",
                  }}
                  onPress={() => resetPassword()}
                >
                  <Text>Forget Password ?</Text>
                </TouchableOpacity>
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
                    onPress={() => {
                      // navigation.navigate('tabs')
                      handleLogin();
                    }}
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
