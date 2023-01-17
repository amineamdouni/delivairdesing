import React, { useContext, useState } from "react";

import {
  Text,
  Center,
  Heading,
  VStack,
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Flex,
  Divider,
  Icon,
  HStack,
  Link,
  useToast,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "native-base";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Alert from "./Alert";
const imgBackground = { uri: "https://wallpaper.dog/large/20470680.jpg" };

//--------- We need to secure this amine !------
const firebaseConfig = {
  apiKey: "AIzaSyCVBbACohSkuUr0FntAmt9BvMUK-RkpY-E",
  authDomain: "delivair-959e9.firebaseapp.com",
  projectId: "delivair-959e9",
  storageBucket: "delivair-959e9.appspot.com",
  messagingSenderId: "1084409904306",
  appId: "1:1084409904306:web:03f5e420eb889f115d1dab",
};
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//-----------------------
import { UserContext } from "../UserContext";
import axios from "axios";
export default function SignUp({ navigation }) {
  const ToastDetails = [
    {
      title: "Network connection restored",
      variant: "left-accent",
      description:
        "This is to inform you that your network connectivity is restored",
      isClosable: true,
    },
  ];
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [dataInput, setDataInput] = useState([]);
  const { setUser, setConnected, setChatUser } = useContext(UserContext);
  const toast = useToast();
  const Ale = (status, title, description) => {
    toast.show({
      render: ({ id }) => {
        return (
          <Alert
            id={id}
            status={status}
            variant={"left-accent"}
            title={title}
            description={description}
            isClosable={true}
          />
        );
      },
    });
  };
  //SignUp function
  const SignUpUser = () => {
    const info = { Email: Email, passw: password };
    setDataInput([info]);
    createUserWithEmailAndPassword(auth, Email, password)
      .then((res) => {
        axios

          .post("http://192.168.1.6:3000/api/users/register", {
            email: Email,
            password,
            username,
          })
          .then((res) => {
            console.log("mongo succ");

            setConnected(res.data.user);
            setChatUser(res.data.user);
            navigation.navigate("notices");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Ale("error", "error", JSON.stringify(err.code));
      });
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
          uri: "https://res.cloudinary.com/duqxezt6m/image/upload/v1673443612/Sans_titre_4_tv1aq8.gif",
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
                uri: "https://res.cloudinary.com/duqxezt6m/image/upload/v1673443763/1_swzwcw.png",
              }}
              alt="Alternate Text"
            />
          </Center>
          <VStack space={1} alignItems="center">
            <Heading color={"white"} size="lg">
              SignUp
            </Heading>
            <Box space={5} alignItems="center" style={{ marginBottom: "40%" }}>
              <Text style={style.Text}>Username</Text>
              <Box alignItems="center">
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
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
                  variant="rounded"
                  borderColor={"white"}
                  mx="4"
                  type="email"
                  placeholderTextColor={"white"}
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
                  variant="rounded"
                  borderColor={"white"}
                  type="password"
                  mx="4"
                  placeholderTextColor={"white"}
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
                  variant="rounded"
                  borderColor={"white"}
                  type="password"
                  mx="4"
                  placeholderTextColor={"white"}
                  placeholder="Confirm Password"
                  style={style.Input}
                  onChangeText={(text) => setConfirm(text)}
                  size="l"
                  shadow="12"
                />
              </Box>
              <HStack space={6}>
                <Checkbox
                  shadow={2}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                  isChecked={false}
                >
                  I accept the terms & conditions
                </Checkbox>
              </HStack>
              ;
              <Box w={160}>
                <HStack space={10} justifyContent="center" style={style.forgot}>
                  <Divider my={2} />
                  <Text color={"white"}>OR</Text>
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
                      color="white"
                      size={30}
                    />
                  </Link>
                  <Divider orientation="vertical" />
                  <Link href="https://gmail.com/">
                    <Icon
                      as={MaterialCommunityIcons}
                      name="google"
                      color="white"
                      size={30}
                    />
                  </Link>
                  <Divider orientation="vertical" />
                  <Link href="https://twitter.com/">
                    <Icon
                      as={MaterialCommunityIcons}
                      name="twitter"
                      color="white"
                      size={30}
                    />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <Center>
                  <Button
                    variant="subtle"
                    className="LoginButton"
                    onPress={SignUpUser}
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
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  LoginButton: {
    marginTop: "20%",
    borderRadius: 5,
    width: "70%",
  },
  Text: {
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
    alignSelf: "flex-start",
    textAlign: "right",
    paddingLeft: 20,
    color: "white",
  },
  forgot: {
    marginTop: 10,
  },
  logoSignUp: {
    Top: 5000,
  },
});
