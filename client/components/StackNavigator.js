import React, { useState, useContext, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../UserContext";
import Login from "./Login";
import SignUp from "./SingnUp";
import AddPost from "./AddPost";
import Reclamation from "./Reclamation";
import Contact from "./ContactList";
import History from "./History";

import Main from "../src/screens/Main";

import Form from "./Forme";

import Chat from "./Chat";
import Profile from "./Profile";
import Track from "./Track";

import Messages from "./Messages";
import ProfileTest from "./Profiletest";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  const { user, connected } = useContext(UserContext);
  useEffect(() => {
    console.log(user, "stack");
  }, [user]);

  // if( !user){return (<Stack.Navigator screenOptions={{ headerShown: false }}>

  // </Stack.Navigator>)}
  //  else
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" component={Messages} />
      <Stack.Screen name="track" component={Track} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="home" component={Main} />
      <Stack.Screen name="form" component={Form} />
      <Stack.Screen name="profile" component={ProfileTest} />

      <Stack.Screen name="addpost" component={AddPost} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="reclamation" component={Reclamation} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="history" component={History} />
    </Stack.Navigator>
  );
};
export default Stacks;
