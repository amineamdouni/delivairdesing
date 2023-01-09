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
export const theme = extendTheme({ config });
export default function App() {
  const [connected, setConnected] = useState(null);
  const [user, setUser] = useState(null);
  const [oneUser, setOneUser] = useState(null);
  const [onePost, setOnePost] = useState(null);
  const [to, setTo] = useState(null);
  const [selected, setSelected] = useState("home");
  const [initializing, setInitializing] = useState(true);
  //Checking if there is a user connected
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (!user) {
        navigation.navigate("login");
      } else {
        setConnected(user.email);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    console.log(connected, "user connected");
    if (!connected) {
      console.log("nothin");
    } else if (connected) {
      console.log("logeed");
      axios
        .get(`http://192.168.1.105:5000/users/${connected}`)
        .then((res) => {
          console.log("succ");
          setUser(res.data);
        })
        .catch((err) => console.log("err"));
    }
  }, [connected]);

  console.log(connected, "heill");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        selected,
        setSelected,
        connected,
        oneUser,
        setOneUser,
        onePost,
        setOnePost,
        to,
        setTo,
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
