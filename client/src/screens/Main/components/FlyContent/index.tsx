import React, { useEffect } from "react";
import { StatusBar, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity, View, Platform ,Linking} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";
import {
  Text,
  Box,
  Container,
  HStack,
  Divider,
  Center,
  Avatar,
  Heading,
  Image,
  VStack,
  useToast,
} from "native-base";
import Alert from "../../../../../components/Alert";

import Swiper from "react-native-swiper";

export default function FlyContent({ navigation, posts, to, from, setPosts }) {
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
  const search = (from, to) => {
    let searchedData = posts.filter(
      (e): any =>
        e.departCountry.toLowerCase().includes(from.toLowerCase()) &&
        e.arriveCountry.toLowerCase().includes(to.toLowerCase())
    );
    setPosts(searchedData);
    console.log(searchedData, "search");

    console.log(posts, "ppppppppppppp");
  };
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

  const headertranslateY = useSharedValue(-320);
  const headerContentTranslateY = useSharedValue(320);
  const headerContentopacity = useSharedValue(0);

  const headerAnimatedStyled = useAnimatedStyle(() => ({
    transform: [{ translateY: headertranslateY.value }],
  }));

  const headerContentAnimatedStyled = useAnimatedStyle(() => ({
    transform: [{ translateY: headerContentTranslateY.value }],
  }));
 const dialCall = (number) => {
   let phoneNumber = "";
   if (Platform.OS === "android") {
     phoneNumber = `tel:${number}`;
   } else {
     phoneNumber = `telprompt:${number}`;
   }
   Linking.openURL(phoneNumber);
 };
  useEffect(() => {
    headertranslateY.value = withTiming(0, { duration: 700 });
    headerContentTranslateY.value = withTiming(0, { duration: 900 });
    headerContentopacity.value = withTiming(1, { duration: 700 });
    // search(from, to);
  }, []);
  useEffect(() => {
    if (posts.length == 0) {
      // Ale('error')
    }
  }, [posts]);
  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header style={headerAnimatedStyled}></S.Header>
      <S.HeaderContent style={headerContentAnimatedStyled}>
        <S.HeaderText bold>Your destination has been submitted</S.HeaderText>
        <S.HeaderText>We are waiting for your delivair</S.HeaderText>
      </S.HeaderContent>
      <S.FlyInfo entering={FlipInXDown.duration(900).delay(100)}>
        <S.FlyInfoContent intensity={70}>
          <S.TextRowContent>
            <S.TextContent>
              <S.LargeText>{from}</S.LargeText>
            </S.TextContent>
            <S.HourContent>
              <Entypo name="chevron-right" size={30} color="white" />
            </S.HourContent>
            <S.TextContent alingment="right">
              <S.LargeText>{to}</S.LargeText>
            </S.TextContent>
          </S.TextRowContent>
          <S.TicketInfo></S.TicketInfo>
          <Box style={{ zIndex: 10002, height: 200, width: 300 }}>
            <Swiper showsPagination={false}>
              {posts.map((e, i) => (
                // <Box width={300} style={style.graybox}>
                //   <Container margin={3}>
                //     <HStack space={2}>
                //       <VStack>
                //         <Center style={style.left}>
                //           <Avatar
                //             source={{
                //               uri: e.poster_image,
                //             }}
                //           />
                //         </Center>
                //         <Center backgroundColor="#EBC8CB" borderRadius="5">
                //           <Text>{e.weight}kg</Text>
                //         </Center>
                //       </VStack>
                //       <Center></Center>
                //       <VStack>
                //         <Container style={style.Middle}>
                //           <Heading size="sm">{e.content}</Heading>
                //           <Text color={"grey"}>{relativeDate(e.postTime)}</Text>
                //           <Text>{e.departCountry}</Text>
                //         </Container>
                //         <Container marginTop="3" fontWeight="400">
                //           <Text>Departure Time:</Text>
                //           <Text>{convertTime(e.departTime)}</Text>
                //         </Container>
                //       </VStack>
                //     </HStack>
                //   </Container>
                // </Box>
                <VStack style={style.friendItem}>
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
                        style={style.profileImage}
                      />
                    </TouchableOpacity>
                    <Text style={style.friendName}>{e.poster_name}</Text>
                    <View>
                      <TouchableOpacity
                        style={style.callIconContainer}
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

                  <VStack style={style.friendInfo}>
                    <Text style={style.friendEmail}>
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
                    <Text style={style.friendPhone}>
                      <MaterialCommunityIcons
                        name="clock-time-eight-outline"
                        size={20}
                        color="#FFC8CE"
                      ></MaterialCommunityIcons>
                      {convertTime(e.departTime)}
                    </Text>
                    <Text style={style.friendCountry}>
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
              ))}
            </Swiper>
          </Box>
        </S.FlyInfoContent>
      </S.FlyInfo>
    </S.Container>
  );
}

const style = StyleSheet.create({
  Header: {
    backgroundColor: "#EBC8CB",
    paddingTop: 30,
  },
  search: {
    width: 100,
    height: 30,
  },
  graybox: {
    color: "black",
    backgroundColor: "#e7f5e5",
    borderRadius: 10,
  },
  searchButtons: {
    color: "black",
    backgroundColor: "#D9D9D9",
    margin: 3,
  },
  Middle: {
    width: 220,
  },
  left: {
    width: 50,
    margin: 10,
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
    right: 35,
  },
  callIconContainer: {
    left: 30, // Adjust the right position as needed
  },
  friendName: {
    fontSize: 20,
    right: 80,
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
});
