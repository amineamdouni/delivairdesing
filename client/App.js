import React, { useEffect,useState } from "react";
import axios from "axios";
import {
  Alert,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  extendTheme,
} from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Login from "./components/Login";
import SignUp from "./components/SingnUp";
import Home from "./components/Home";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme

const imgBackground = "https://wallpaper.dog/large/20470680.jpg";

export const theme = extendTheme({ config });
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {



  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Notifications" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="Tabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
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
