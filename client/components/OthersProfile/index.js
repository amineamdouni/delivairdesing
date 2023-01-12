import React, { useCallback, useContext, useEffect, useState } from "react";

import Rating from "./Rating.js"
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,TouchableOpacity
  
} from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./profileTestcss";
import { Text, Box, Image, Center, HStack,Avatar, Button } from "native-base";
import { Menu, Pressable, HamburgerIcon, ChevronDownIcon } from "native-base";
import Footer from "../Footer";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
import  {UserContext} from "../../UserContext"
export default function FlyContent({ navigation, posts }) {
  const [rating,setRating]=useState(0)
 const { user, connected,oneUser,setOneUser } = useContext(UserContext);
 const [, updateState] = useState();
 const forceUpdate = useCallback(() => updateState({}), []);
 const [userStatus,setUserStatus]=useState(null)
 useEffect(() => {
  forceUpdate()
  
  if(oneUser){
   if (
     
     oneUser.pendingRequests.includes(user.email)
   ) {
     setUserStatus("waiting");
   } else if (
     user.contactList.includes(oneUser.email) 
   ) {
     setUserStatus("friend");
   } else if(
     user.pendingRequests.includes(oneUser.email)

   ){
setUserStatus('pending')
   }
   
   else{
     setUserStatus("unknown");
   }
 setRating(
   oneUser.ratings.reduce(
     (accumulateur, valeurCourante) => Number(accumulateur) + Number(valeurCourante)
   ,0)/oneUser.ratings.length
 );
 };
 
   console.log(oneUser, "profile");
 }, [oneUser]);
 const userStat=()=>{
  if (userStatus==='waiting') {
    return (
      <>
        
        <Button >remove request</Button>
      </>
    );  } 
    else if (userStatus==='pending') {
    return(
<Button>accepet</Button>
    )
  } else if (userStatus==='unknown') {
    return(
<Button>add</Button>
    )
  }
 }
 console.log(rating);
  const headertranslateY = useSharedValue(-320);
  const headerContentTranslateY = useSharedValue(320);
  const headerContentopacity = useSharedValue(0);

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
      
navigation.navigate('login')
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
                  <Text>Edit Profile</Text>
                </HStack>
              </Menu.Item>
              <Menu.Item onPress={() => SignOut()}>
                <HStack>
                  <MaterialCommunityIcons name="logout" color="red" size={17} />
                  <Text>Logout</Text>
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
                <Text>(rating{oneUser && oneUser.ratings.length})</Text>

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
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                      ></Avatar>
                      <Text top={3}>: was very professional. </Text>
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
                        : He carefully listened to our needs and helped us find
                        exactly what we were looking for.
                      </Text>
                    </HStack>
                  </ScrollView>
                </Box>
              </SafeAreaView>

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
  return (<Text size={50}> hi err</Text>)
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
});
