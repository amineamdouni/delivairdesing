import React from "react";

import { Text, HStack, Switch, useColorMode, extendTheme } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import Stacks from "./components/StackNavigator";
import { NativeBaseProvider } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme

const imgBackground = "https://wallpaper.dog/large/20470680.jpg";

export const theme = extendTheme({ config });
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </NativeBaseProvider>
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
