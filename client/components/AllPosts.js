//import liraries
import * as React from "react";
import { Box, HStack, Center, Heading, ScrollView ,VStack} from "native-base";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { Linking, Platform } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import { TouchableOpacity } from "react-native";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import { async } from "@firebase/util";
import Alert from "./Alert";
import { useToast } from "native-base";
const friends = [
  {
    name: "Amine Amdouni",
    email: "amouna@gmail.com",
    phone: "123-456-7890",
    country: "United States",
    profileImage:
      "https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane@gmail.com",
    phone: "098-765-4321",
    country: "Canada",
    profileImage: "https://picsum.photos/200",
  },
  {
    name: "Wiem Mimouni",
    email: "mimouni@gmail.com",
    phone: "123-456-7890",
    country: "tunisia",
    profileImage:
      "https://res.cloudinary.com/duqxezt6m/image/upload/v1671620160/me_kosu6u_p95f3v.jpg",
  },
  {
    name: "Mahdi Dissem",
    email: "midox@gmail.com",
    phone: "123-456-7890",
    country: "tunisia",
    profileImage:
      "https://cdn.discordapp.com/attachments/1030292601489854626/1059141724955484200/1FCD701D-518F-48E5-98DF-F99CC2DB91C4.jpg",
  },
  {
    name: "Abderrahim Ouertani",
    email: "abdouu@gmail.com",
    phone: "123-456-7890",
    country: "tunisia",
    profileImage:
      "https://cdn.discordapp.com/attachments/1030292601489854626/1059141955470229585/D7C1F79F-0816-4479-9397-1CF6493F9CD7.jpg",
  },
];
import { LinearGradient } from "expo-linear-gradient";

export default function AllPosts({ navigation }) {
  //----------
  const toast = useToast();
  const Ale = (status, title, description) => {
    toast.show({
      render: ({ id }) => {
        return (
          <Alert
            id={id}
            status={status}
            variant={"left-accent"}
            title={title}
            description={description}
            isClosable={true}
          />
        );
      },
    });
  };

  //----------
  // React.useEffect(() => {
  //   axios

  //     .get(`http://192.168.1.107:5001/posts`)

  //     .then((res) => {
  //       setPosts(res.data);
  //       Ale(
  //         "success",
  //         res.data.length + " people posted!",
  //         "Make sure to verify everything before sending goods !"
  //       );
  //     })
  //     .catch((err) => Ale("error", "oups", err));
  // }, []);

  const relativeDate = (param) => {
    var olddate = new Date(param);
    var oldseconds = olddate.getTime() / 1000; //1440516958
    const date = new Date();
    const timestamp = date.getTime();
    const seconds = Math.floor(timestamp / 1000);
    const difference = seconds - oldseconds;
    let output = ``;
    if (difference < 60) {
      // Less than a minute has passed:
      output = `${difference} seconds ago`;
    } else if (difference < 3600) {
      // Less than an hour has passed:
      output = `${Math.floor(difference / 60)} minutes ago`;
    } else if (difference < 86400) {
      // Less than a day has passed:
      output = `${Math.floor(difference / 3600)} hours ago`;
    } else if (difference < 2620800) {
      // Less than a month has passed:
      output = `${Math.floor(difference / 86400)} days ago`;
    } else if (difference < 31449600) {
      // Less than a year has passed:
      output = `${Math.floor(difference / 2620800)} months ago`;
    } else {
      // More than a year has passed:
      output = `${Math.floor(difference / 31449600)} years ago`;
    }
    return output;
  };
  const convertTime = (pa) => {
    return pa.slice(0, pa.length - 6) + " UTC " + pa.slice(pa.length - 6);
  };

  const { setOneUser, contactList } = useContext(UserContext);
  const [posts, setPosts] = useState([
    {
      poster_id: 1,
      poster_name: "John Doe",
      poster_image: "https://example.com/john.jpg",
      weight: 150,
      departTime: "2023-09-15T10:00:00Z",
      depart:"spain",
      phone: "123-456-7890",
      content: "Looking for a travel buddy!",
    },
    {
      poster_id: 2,
      poster_name: "Alice Smith",
      poster_image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      weight: 130,
      departTime: "2023-09-20T08:30:00Z",
      depart:"tunis",
      phone: "987-654-3210",
      content: "Planning a hiking trip.",
    },
    // Add more posts here...
  ]);
  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View>
      <Box>
        <Box backgroundColor={"#FFC8CE"}>
          <Box style={styles.Header}>
            <HStack>
              <Center>
                <Heading style={styles.logo}>Delivair</Heading>
              </Center>
            </HStack>
          </Box>
        </Box>
      </Box>
      <ScrollView>
        {posts &&
          posts.map((e, i) => {
           
            // axios

            //   .get(`http://192.168.1.107:5001/users/id/${e.poster_id}`)

            //   .then((res) => (test = res.data));
            // console.log(test, "titi");
            return (
              <VStack style={styles.friendItem}>
                <HStack>
                  <TouchableOpacity
                    onPress={() => {
                      //   await axios

                      //     .get(`http://192.168.1.107:5001/users/id/${e.poster_id}`)

                      //     .then((res) => {
                      //       setOneUser(res.data);
                      // });
                      navigation.navigate("otherprofile");
                    }}
                  >
                    <Image
                      source={{ uri: e.poster_image }}
                      style={styles.profileImage}
                    />
                  </TouchableOpacity>
                  <Text style={styles.friendName}>{e.poster_name}</Text>
                  <View>
                    <TouchableOpacity
                      style={styles.callIconContainer}
                      onPress={() => dialCall(e.phone)}
                    >
                      <AntDesign
                        name="phone"
                        color={"#5FC8C0"}
                        size={25}
                      ></AntDesign>
                    </TouchableOpacity>
                  </View>
                </HStack>

                <VStack style={styles.friendInfo}>
                  <Text style={styles.friendEmail}>
                    <MaterialCommunityIcons
                      name="weight-kilogram"
                      size={20}
                      color="#FFC8CE"
                    ></MaterialCommunityIcons>
                    :
                    <Text style={{ color: "#5FC8C0", fontWeight: "bold" }}>
                      {e.weight}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}> KG</Text>
                  </Text>
                  <Text style={styles.friendPhone}>
                    <MaterialCommunityIcons
                      name="clock-time-eight-outline"
                      size={20}
                      color="#FFC8CE"
                    ></MaterialCommunityIcons>
                    {convertTime(e.departTime)}
                  </Text>
                  <Text style={styles.friendCountry}>
                    <MaterialCommunityIcons
                      name="airplane-marker"
                      size={20}
                      color="#FFC8CE"
                    ></MaterialCommunityIcons>
                    :{e.depart}
                  </Text>
                  <Text>
                    <MaterialCommunityIcons
                      name="message"
                      size={20}
                      color="#FFC8CE"
                    ></MaterialCommunityIcons>
                    : {e.content}
                  </Text>
                </VStack>
              </VStack>
            );
          })}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#FFC8CE",
    paddingTop: 80,
    width: 500,
    height: 100,
    left: 0,
    top: -33,
    ImageBackground:
      "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
    alignContent: "middle",
  },
  logo: {
    color: "white",
    width: 143,
    height: 48,
    left: 20,
    top: 10,
    fontSize: 30,
  },
  friendItem: {
    alignItems: "center",
    margin: 20,
    borderRadius: 30,
    padding: 20,
    backgroundColor: "white",
  },
  profileImage: {
    width: "35%", // Set to 20% of the screen width
    aspectRatio: 1, // To maintain a square aspect ratio
    borderRadius: 25,
    right: 35,
    marginBottom: 15,
  },
  friendInfoContainer: {
    width: "70%", // Set to 70% of the screen width
    marginLeft: "2%", // Add a small margin between the image and info
  },
  friendInfo: {
    right:35
  },
  callIconContainer: {
    
    left:30, // Adjust the right position as needed
  },
  friendName: {
    fontSize: 20,
    right: 95,
    top:7,
    fontWeight: "bold",
  },
  friendEmail: {
    fontSize: 16,
  },
  friendPhone: {
    fontSize: 16,
  },
  friendCountry: {
    fontSize: 16,
  },
  verticleLine: {
    width: 1,
    backgroundColor: "#5FC8C0",
  },
});
