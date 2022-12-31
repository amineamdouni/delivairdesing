import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabs from "./TabNavigation";
import Login from "./Login";
import SignUp from "./SingnUp";
const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="tabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
