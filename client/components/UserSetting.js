import { StyleSheet, Image,View, Button, Text, TouchableOpacity } from "react-native";
import {
  Box,
  Flex,
  Divider,
  Avatar,
  Input,
  HStack,
  VStack,
  ScrollView,
} from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

//---------Firebase---------
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCVBbACohSkuUr0FntAmt9BvMUK-RkpY-E",
  authDomain: "delivair-959e9.firebaseapp.com",
  projectId: "delivair-959e9",
  storageBucket: "delivair-959e9.appspot.com",
  messagingSenderId: "1084409904306",
  appId: "1:1084409904306:web:03f5e420eb889f115d1dab",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);

//------------firebase-----------
import { useState } from "react";
const PersonalInformationForm = () => {
  const convertTime = (pa) => {
    return pa.slice(0, pa.length - 6) + " UTC " + pa.slice(pa.length - 6);
  };

  const e = {
    poster_id: 1,
    poster_name: "John Doe",
    poster_image: "https://randomuser.me/api/portraits/men/12.jpg",
    weight: 150,
    departTime: "2023-09-15T10:00:00Z",
    depart: "spain",
    phone: "123-456-7890",
    content: "Looking for a travel buddy!",
  };
  const [selected, setSelected] = useState("settings");
  const [settings, setSettings] = useState("settings");
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [progress, setProgress] = useState(0);

  const [history, setHistory] = useState(null);
  const changed = (pressed) => {
    if (pressed === "settings") {
      setSettings("settings");
      setHistory(null);
      setPosts(null);
    }
    if (pressed === "posts") {
      setPosts("posts");
      setHistory(null);
      setSettings(null);
    }
    if (pressed === "history") {
      setHistory("history");
      setPosts(null);
      setSettings(null);
    }
  };
  //------------firebase upload picture---------

  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const uploadImage = async () => {
  //   setProgress(0);
  //   setLoading(true);
  //   const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function () {
  //       resolve(xhr.response);
  //     };
  //     xhr.onerror = function () {
  //       reject(new TypeError("Network request failed"));
  //     };
  //     xhr.responseType = "blob";
  //     xhr.open("GET", image, true);
  //     xhr.send(null);
  //   });
  //   const ref = firebase.storage().ref().child(`Pictures/Image2`);
  //   const snapshot = ref.put(blob);
  //   snapshot.on(
  //     firebase.storage.TaskEvent.STATE_CHANGED,
  //     () => {
  //       setUploading(true);
  //     },
  //     (error) => {
  //       setUploading(false);
  //       console.log(error);
  //       alert(error);
  //       blob.close();
  //       Ale("error", "Oups there is an error", "Try again please!");
  //       return;
  //     },

  //     () => {
  //       snapshot.snapshot.ref.getDownloadURL().then((url) => {
  //         Ale(
  //           "success",
  //           "Upload successful",
  //           "You can submit now! (don't forget to fill the rest of the form!"
  //         );
  //         setUploading(false);
  //         setProgress(100);
  //         console.log("Download URL: ", url);
  //         setImage(url);
  //         setLoading(false);
  //         blob.close();
  //         return url;
  //       });
  //     }
  //   );
  // };

  //----------end of firebase upload picture----

  return (
    <Box backgroundColor={"#FFFFFF"} height={2000}>
      {settings && (
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Avatar
              top={120}
              bg="lightBlue.400"
              size="2xl"
              borderRadius={100}
              source={{ uri: image }}
              alt="Alternate Text"
              alignSelf="center"
            ></Avatar>
          ) : (
            <Avatar
              borderColor={"black"}
              borderWidth={1}
              size="2xl"
              alignSelf="center"
              top={120}
              borderRadius={100}
              source={{
                uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
              }}
              alt="Alternate Text"
            />
          )}
        </TouchableOpacity>
      )}

      <Box top={200} alignItems="center">
        <Flex direction="row" h="58" p="4">
          <HStack>
            <TouchableOpacity
              onPress={() => {
                changed("settings");
              }}
            >
              <Text
                style={{ color:settings?"#5FC8C0": "#000000", fontWeight: "bold", fontSize: "16" }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            <TouchableOpacity
              onPress={() => {
                changed("posts");
              }}
            >
              <Text
                style={{ color: posts?"#5FC8C0": "#000000", fontWeight: "bold", fontSize: "16" }}
              >
                Posts
              </Text>
            </TouchableOpacity>
          </HStack>
        </Flex>
      </Box>
      {settings && (
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Full Name</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"#000000"}
                  placeholderTextColor={"#000000"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="John Doe"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Email</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"#000000"}
                  placeholderTextColor={"#000000"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="john@example.com"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Phone</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"#000000"}
                  placeholderTextColor={"#000000"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="(239) 816-9029"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Mobile</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"#000000"}
                  placeholderTextColor={"#000000"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="(320) 380-4539"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Address</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"#000000"}
                  placeholderTextColor={"#000000"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="Bay Area, San Francisco, CA"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.emptyColumn} />
              <View style={styles.buttonColumn}>
                <Button
                  title="Save Changes"
                  backgroundColor="#5FC8C0"
                  color="#000000"
                />
              </View>
            </View>
          </View>
        </View>
      )}
      {posts && (
        <View style={styles.card}>
          <ScrollView h="600">
            <Box>
              <VStack  alignItems="center">
                <VStack style={(styles.friendItem)}>
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
                          name="delete"
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
                          name="delete"
                          color={"#5FC8C0"}
                          size={25}
                        ></AntDesign>
                      </TouchableOpacity>
                    </View>
                  </HStack>

                  <VStack  style={ styles.friendInfo}>
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
                          name="delete"
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
              </VStack>
            </Box>
          </ScrollView>
        </View>
      )}
    </Box>
  );
};

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
    margin:10,
    borderRadius: 30,
    padding: 50,
    backgroundColor: "white",
shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5, // Adjust the shadow opacity as needed
  shadowRadius: 5,    // Adjust the shadow radius as needed
  elevation: 5,       // For Android


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
    right: 35,
  },
  callIconContainer: {
    left: 30, // Adjust the right position as needed
  },
  friendName: {
    fontSize: 20,
    right: 95,
    top: 7,
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

  card: {
    top: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginBottom: 1.5,
    
  },
  cardBody: {
    padding: 70,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  labelColumn: {
    width: 80,
    right: 30,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000000",
  },
  inputColumn: {
    flex: 1,
  },
  input: {},
  emptyColumn: {
    width: 80,
  },
  buttonColumn: {
    backgroundColor: "#5FC8C0",
    left: 80,
    top: 20,
    borderRadius: 10,
  },
});

export default PersonalInformationForm;
