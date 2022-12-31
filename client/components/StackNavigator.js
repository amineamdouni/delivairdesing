import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabs from "./TabNavigation";
import Login from "./Login";
import SignUp from "./SingnUp";
import AddPost from "./AddPost";
import Reclamation from "./Reclamation";
import Contact from "./ContactList";
import History from "./History";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="addpost" component={AddPost} />
      <Stack.Screen name="reclamation" component={Reclamation} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="history" component={History} />
      
      <Stack.Screen name="tabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
