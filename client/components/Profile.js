import React,{useContext} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { UserContext } from "../UserContext";
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  Center,
  NativeBaseProvider,
  VStack,
  Avatar,
} from "native-base";
import Footer from "./Footer";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export default function Profile({ navigation }) {
  const {user} =useContext(UserContext)

  function SignOut() {
    signOut(auth)
      .then((res) => {

       

        alert("Signed out");
        navigation.navigate("login");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              onPress={() => navigation.navigate("home")}
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>

            <Menu
              w="190"
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <MaterialCommunityIcons
                      name="dots-horizontal-circle-outline"
                      size={24}
                      color="#52575D"
                    ></MaterialCommunityIcons>
                  </Pressable>
                );
              }}
            >
              <Menu.Item>
                {" "}
                <VStack>
                  <Text>
                    {" "}
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={24}
                      color="#52575D"
                    />
                    Edit
                  </Text>
                </VStack>
              </Menu.Item>

              <Menu.Item onPress={() => SignOut()}>
                {" "}
                <VStack>

                  <Text>
                    {" "}
                    <MaterialCommunityIcons
                      name="logout"
                      size={24}
                      color="red"
                    />
                    Logout
                  </Text>
                </VStack>
              </Menu.Item>
            </Menu>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059132781097140294/B5D7F24B-388D-4038-8644-F999ACD00FAE.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.dm}>
              <MaterialIcons
                name="chat"
                size={18}
                color="#DFD8C8"
              ></MaterialIcons>
            </View>
            <View style={styles.active}></View>
            {/* <View style={styles.add}>
                        <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </View> */}
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Med Aziz Selini
            </Text>
            <Ionicons name="shield-checkmark-sharp" color={"green"} size={26} />
          </View>
          {/* 
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View> */}

          <View style={{ marginTop: 80}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* <View style={styles.mediaImageContainer}>
                            <Image source={{uri:"https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"}} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{uri:"https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"}} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={{uri:"https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"}} style={styles.image} resizeMode="cover"></Image>
                        </View> */}
            </ScrollView>
          </View>
          {/* <Text style={[styles.subText, styles.recent] }>User information</Text> */}
         
          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              {/* <View style={styles.activityIndicator}></View> */}
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "400" }]}
                >
                  <Text style={{ fontWeight: "800" }}>First Name :</Text> Med
                  Aziz
                </Text>
                
              </View>
            </View>
           
            <View style={styles.recentItem}>
               
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "400" }]}
                >
                  <Text style={{ fontWeight: "800" }}>Last Name :</Text> Selini
                </Text>
              </View>
            </View>
           
            <View style={styles.recentItem}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "400" }]}
                >
                  <Text style={{ fontWeight: "800" }}>Phone Number :</Text> +
                  216 52 224 782
                </Text>
              </View>
            </View>
            <View style={styles.recentItem}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "400" }]}
                >
                  <Text style={{ fontWeight: "800" }}>Email :</Text>{" "}
                  medaziz@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.subText, styles.recent]}>Contact list </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141724955484200/1FCD701D-518F-48E5-98DF-F99CC2DB91C4.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141955470229585/D7C1F79F-0816-4479-9397-1CF6493F9CD7.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/duqxezt6m/image/upload/v1671620160/me_kosu6u_p95f3v.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059144461847887942/53DDBDD0-F8AD-4EE1-B0C3-F6920D31C8D8.jpg",
                }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>

      <Footer navigation={navigation} />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 1,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
    marginHorizontal: 15,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 90,
    marginBottom: 6,
    fontSize: 13,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 35,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
