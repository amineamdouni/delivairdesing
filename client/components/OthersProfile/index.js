import React, { useCallback, useContext, useEffect, useState } from "react";

import Rating from "./Rating.js";
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import axios from "axios";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./profileTestcss";

import {
  Text,
  Box,
  Image,
  Center,
  HStack,
  Avatar,
  Button,
  Modal,
  Input,
} from "native-base";
import SetRating from "./SetRating";

import { Menu, Pressable, HamburgerIcon, ChevronDownIcon } from "native-base";
import Footer from "../Footer";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
import { UserContext } from "../../UserContext";

import axios from "axios";
export default function FlyContent({ navigation, posts }) {
  const [starRating, setStarRating] = useState(null);
  const [rating, setRating] = useState(0);
  const { user, setConnected, oneUser, setOneUser, contactArray,setcontactArray } =
    useContext(UserContext);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [userStatus, setUserStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("");
  const [review, setReview] = useState([]);

  const unfriend = async() => {
    let contacts = [...oneUser.contactList];
    let idx = contacts.indexOf(user.email);
    contacts.splice(idx, 1);
    axios
      .put(`http://192.168.1.132:5001/users/${oneUser.user_id}`, {
        contactList: contacts,
      })
      .then((res) => {
        setConnected(null)
        console.log("friend removed succ");
      });
      let usercontacts = [...user.contactList];
      let index = usercontacts.indexOf(oneUser.email);
       usercontacts.splice(index, 1);
      axios
      .put(`http://192.168.1.132:5001/users/${user.user_id}`, {
        contactList: usercontacts,
      })
      .then((res) => {
        setConnected(null)
         setcontactArray(usercontacts);
        console.log("friend removed succ");
      });
     
        console.log(idx,'      ',index);
      };
const addFriend=()=>{
    let contacts = [...oneUser.pendingRequests];
  
    contacts.push(user.email);
   axios
     .put(`http://192.168.1.132:5001/users/${oneUser.user_id}`, {
       pendingRequests: contacts,
     })
     .then((res) => {
      setConnected(null)
   
       console.log("friend sent  succ");
     });


     
}
const acceptRequest=()=>{
  let pending = [...user.pendingRequests];
  let idx = pending.indexOf(oneUser.email);
  pending.splice(idx, 1);
  let contacts=[...oneUser.contactList]
  contacts.push(user.email)
  axios
    .put(`http://192.168.1.132:5001/users/${oneUser.user_id}`, {
      
      contactList:contacts
    })
    .then((res) => {
      setConnected(null)
      console.log("friend added succ");
    });
    let contactuser = [...user.contactList];
    contactuser.push(oneUser.email);
    axios
      .put(`http://192.168.1.132:5001/users/${user.user_id}`, {
        pendingRequests: pending,
        contactList: contacts,
      })
      .then((res) => {
        setConnected(null)
        console.log("friend accepted succ");
      });
}

  useEffect(() => {
    forceUpdate();

    if (oneUser) {
      if (oneUser.pendingRequests.includes(user.email)) {
        setUserStatus("waiting");
      } else if (user.contactList.includes(oneUser.email)) {
        setUserStatus("friend");
      } else if (user.pendingRequests.includes(oneUser.email)) {
        setUserStatus("pending");
      } else {
        setUserStatus("unknown");
      }
      setRating(
        oneUser.ratings.reduce(
          (accumulateur, valeurCourante) =>
            Number(accumulateur) + Number(valeurCourante),
          0
        ) / oneUser.ratings.length
      );
    }

    console.log(oneUser, "profile");
  }, [oneUser]);

  const postReview = () => {
    axios.post("http://192.168.1.119:5001/reviews/", {
      content: message,
      reviewSender: user.user_id,
      reviewReceiver: oneUser.user_id,
    });
  };

  useEffect(() => {
    if (oneUser) {
      axios
        .get(`http://192.168.1.119:5001/reviews/${oneUser.user_id}`)
        .then((res) => {
          setReview(res.data);
          console.log(review);
        })
        .catch((err) => console.log(err));
    }
  }, [oneUser]);

  const userStat = () => {

    console.log(userStatus);
    if (userStatus === "waiting") {
      return <Button>remove request</Button>;
    } else if (userStatus === "pending") {
      return (
        <Button
          onPress={() => {
            acceptRequest();
          }}
        >
          accept
        </Button>
      );
    } else if (userStatus === "unknown") {
      return <Button onPress={()=>{
        addFriend()
      }}>add</Button>;
    } else if (userStatus === "friend") {
      return <Button onPress={()=>{unfriend()}}>Unfriend</Button>;

    }
  };
  console.log(rating);
  const headertranslateY = useSharedValue(-320);
  const headerContentTranslateY = useSharedValue(320);
  const headerContentopacity = useSharedValue(0);
  console.log(starRating);

  const headerAnimatedStyled = useAnimatedStyle(() => ({
    transform: [{ translateY: headertranslateY.value }],
  }));

  const headerContentAnimatedStyled = useAnimatedStyle(() => ({
    transform: [{ translateY: headerContentTranslateY.value }],
  }));

  useEffect(() => {
    headertranslateY.value = withTiming(0, { duration: 700 });
    headerContentTranslateY.value = withTiming(0, { duration: 900 });
    headerContentopacity.value = withTiming(1, { duration: 700 });
  }, []);

  function SignOut() {
    signOut(auth)
      .then((res) => {
        setConnected(null)
        navigation.navigate("login");
        alert("Signed out");
      })
      .catch((error) => {
        alert(error);
      });
  }
  if (oneUser) {
    return (
      <S.Container>
        <StatusBar barStyle="light-content" />
        <S.Header style={headerAnimatedStyled}></S.Header>
        <S.HeaderContent style={headerContentAnimatedStyled}>
          <HStack justifyContent="space-between" space={220}>
            <Center>
              <Text color={"black"} fontSize={30} fontWeight={"light"}>
                DelivAir
              </Text>
            </Center>

            <Box alignItems="center">
              <Menu
                w="130"
                trigger={(triggerProps) => {
                  return (
                    <Pressable
                      accessibilityLabel="More options menu"
                      {...triggerProps}
                    >
                      <ChevronDownIcon size={5} color="black" />
                    </Pressable>
                  );
                }}
              >
                <Menu.Item>
                  <HStack>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      color="green"
                      size={17}
                    />

                    <TouchableOpacity onPress={() => setShowModal(true)}>
                      <Text>Give Review</Text>
                    </TouchableOpacity>

                  </HStack>
                </Menu.Item>
                <Menu.Item onPress={() => SignOut()}>
                  <HStack>
                    <MaterialCommunityIcons

                      name="account-off"
                      color="red"
                      size={17}
                    />
                    <Text>Unfriend</Text>

                  </HStack>
                </Menu.Item>
              </Menu>
            </Box>
          </HStack>
        </S.HeaderContent>
        <S.FlyInfo entering={FlipInXDown.duration(900).delay(100)}>
          <S.FlyInfoContent intensity={70}>
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <Center alignItems="center">
                <Image
                  size={150}
                  borderRadius={100}
                  source={{
                    uri: oneUser.image,
                  }}
                  alt="Alternate Text"
                />
              </Center>

              <S.FlyInfoTwo entering={FlipInXDown.duration(900).delay(800)}>
                <Center alignItems="center">
                  <S.LargeText
                    style={[styles.text, { fontWeight: "bold", fontSize: 34 }]}
                  >
                    {oneUser.userName}
                  </S.LargeText>
                  {userStat()}
                  <Rating starRating={rating} />
                  <Text>({oneUser && oneUser.ratings.length})reviews</Text>

                  {/* add star rating here  */}
                  <Box marginRight={-50}>
                    <S.HeaderInfoText
                      style={{ fontSize: 17, fontWeight: "bold" }}
                    >
                      Phone Number :
                      <Text style={{ color: "#36454F", fontSize: 17 }}>

                        {oneUser.phoneNumber}
                      </Text>
                    </S.HeaderInfoText>
                  </Box>
                  <Box bottom={5} marginRight={-50} right={6}>
                    <S.HeaderInfoText
                      style={{ fontSize: 17, fontWeight: "bold" }}
                    >
                      Email :
                      <Text style={{ color: "#36454F", fontSize: 17 }}>
                        {" "}
                        {oneUser.email}
                      </Text>
                    </S.HeaderInfoText>
                  </Box>
                  <Box bottom={10} right={2} marginRight={-50}>
                    <S.HeaderInfoText
                      style={{ fontSize: 17, fontWeight: "bold" }}
                    >
                      Location :
                      <Text style={{ color: "#36454F", fontSize: 17 }}>
                        {" "}
                        {oneUser.location}
                      </Text>
                    </S.HeaderInfoText>
                  </Box>
                </Center>
              </S.FlyInfoTwo>
              <S.FlyInfoFour>
                <SafeAreaView>
                  <Box
                    borderRadius={6}
                    bottom={9}
                    height={90}
                    left={3}
                    width={"110%"}
                    borderColor={"black"}
                    borderWidth={1}
                  >
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <HStack space={7}>
                        <Avatar
                          left={3}
                          top={2}
                          bg="cyan.500"
                          size="xs"
                          source={{
                            uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                          }}
                        ></Avatar>
                        <Text top={3}>: {review[0].content} </Text>
                      </HStack>
                      <HStack space={7}>
                        <Avatar
                          left={3}
                          top={3}
                          bg="cyan.500"
                          size="xs"
                          source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                          }}
                        ></Avatar>
                        <Text maxWidth={"50%"} top={3}>
                          : He carefully listened to our needs and helped us
                          find exactly what we were looking for.
                        </Text>
                      </HStack>
                    </ScrollView>
                  </Box>
                </SafeAreaView>


                <Modal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  _backdrop={{
                    _dark: {
                      bg: "coolGray.800",
                    },
                    bg: "warmGray.50",
                  }}
                >
                  <Modal.Content maxWidth="350" maxH="212">
                    <Modal.CloseButton />
                    <Modal.Header>Review this person</Modal.Header>
                    <Modal.Body>
                      <SetRating
                        starRating={starRating}
                        setStarRating={setStarRating}
                        message={message}
                      />
                      <Box>
                        <View>
                          <Text>Message :</Text>
                          <Box>
                            <Input
                              variant="rounded"
                              borderColor={"white"}
                              placeholderTextColor={"white"}
                              size="l"
                              style={styles.Input}
                              width="100%"
                              onChangeText={(text) => setMessage(text)}
                            />
                          </Box>
                        </View>
                      </Box>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button.Group space={2}>
                        <Button
                          variant="ghost"
                          colorScheme="blueGray"
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="subtle"
                          onPress={() => {
                            postReview();
                            setShowModal(false);
                          }}
                        >
                          Submit
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>

                {/* Add review with scroll and inputs for add other revieiw */}
              </S.FlyInfoFour>
            </ScrollView>
            {/* <S.TicketInfo></S.TicketInfo> */}
          </S.FlyInfoContent>
        </S.FlyInfo>
        <Footer navigation={navigation} />
      </S.Container>
    );
  } else {
    return <Text size={50}> hi err</Text>;
  }
}
const styles = StyleSheet.create({
  text: {
    color: "black",
    marginRight: -50,
  },
  mediaImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
    marginHorizontal: 15,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  imagerev: {
    flex: 1,
    borderradius: 25,
    height: 10,
    width: 10,
  },
  Input: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
