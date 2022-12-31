import React, { useEffect,useState } from "react";
import axios from "axios";
import {
  Text,

  HStack,

  Switch,
  useColorMode,
  extendTheme,
} from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="tabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
function HomeTabs() {
  return (

    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
         
         
          backgroundColor: "#B1C4CB",
          backgroundImage: "url('https://wallpaper.dog/large/20470680.jpg')",
          position: "absolute",
           },
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="come"
        component={Home}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="cdome"
        component={Home}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Login}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

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

