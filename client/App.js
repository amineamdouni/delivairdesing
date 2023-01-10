import React, { useState, useEffect, createContext } from "react";

import { Text, HStack, Switch, useColorMode, extendTheme } from "native-base";

import axios from "axios";

import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "./UserContext";
import Stacks from "./components/StackNavigator";
import { NativeBaseProvider } from "native-base";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
import { amine } from "./host.js";
const imgBackground = "https://wallpaper.dog/large/20470680.jpg";

import socketIO from "socket.io-client";

export const theme = extendTheme({ config });
export default function App() {
  // const socket = socketIO.connect("http://192.168.104.13:3000");
  const [connected, setConnected] = useState(null);
  const [user, setUser] = useState(null);
  const [chatUser, setChatUser] = useState(null);
  const [oneUser, setOneUser] = useState(null);
  const [onePost, setOnePost] = useState(null);
  const [to, setTo] = useState(null);
  const [contactList, setContactList] = useState([]);
  const [contactArray, setcontactArray] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [pendingArray, setPendingArray] = useState([]);
  const [selected, setSelected] = useState("home");
  const [initializing, setInitializing] = useState(true);
  var [socket, setSocket] = useState("");
  //Checking if there is a user connected

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user connected is ", user.email);

      if (initializing) {
        setInitializing(false);
      }
      if (user === null) {
        navigation.navigate("login");
      }
    });
  }, [connected]);
  // useEffect(() => {
  //   if (user) {
  //     setcontactArray(user.contactList);
  //     setPendingArray(user.pendingRequests);
  //     for (let i = 0; i < user.contactList.length; i++) {
  //       axios.get("").then((res) => {
  //         if (!contactList) {
  //           setContactList(res.data);
  //         } else {
  //           let oldContact = contactList;
  //           setContactList(...oldContact, res.data);
  //         }
  //       });
  //     }
  //     for (let i = 0; i < user.contactList.length; i++) {
  //       axios.get("").then((res) => {
  //         if (!pendingList) {
  //           setContactList(res.data);
  //         } else {
  //           let oldContact = contactList;
  //           setContactList(...oldContact, res.data);
  //         }
  //       });
  //     }
  //   }
  // }, [user]);

  console.log(user, "user");
  console.log(chatUser, "chat");
  console.log(socket, "socket");

  return (
    <UserContext.Provider
      value={{
        chatUser,
        setChatUser,
        user,
        setUser,
        selected,
        setSelected,
        connected,
        setConnected,
        oneUser,
        setOneUser,
        onePost,
        setOnePost,
        to,
        setTo,
        socket,
        setSocket,
      }}
    >
      <NativeBaseProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
