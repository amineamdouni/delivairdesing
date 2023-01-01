import React from "react";

import { Image } from "native-base";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
import More from "./Settings";
import Home from "./Home";
import Chat from "./Chat";
import Profile from "./Profile";
import Track from "./Track";
export default function HomeTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarShowLabel: false,

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
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused === true ? "grey" : "#000000"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="chat"
              color={focused === true ? "grey" : "#000000"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={()=>navigation.navigate('more')}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: "#E8C6C8",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 50,
                }}
              >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/32/32339.png",
                  }}
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: "black",
                  }}
                  alt={"icon"}
                ></Image>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="track"
        component={Track}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="radar"
              color={focused === true ? "grey" : "#000000"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused === true ? "grey" : "#000000"}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
