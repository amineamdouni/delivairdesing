import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  FadeOut,
  FlipOutXUp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, Box, Input, useToast } from "native-base";
import * as A from "native-base";
import { StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Footer from "../../../components/Footer";
import * as S from "./styles";

import airplane from "../../assets/images/airplane.png";

import Button from "./components/Button";
import CardSelect from "./components/CardSelect";
import StatusContent from "./components/StatusContent";
import Cloud from "./components/Cloud";
import FlyContent from "./components/FlyContent";
import axios from "axios";
import { TouchableOpacity } from "react-native";
const date = new Date();

import Alert from "../../../components/Alert";
import { Toast } from "native-base";

export default function Main({ navigation }: any) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => forceUpdate(), []);
  //---------
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
  //---------

  const backgroundColor = useSharedValue("white");
  const airplaneRotateZ = useSharedValue(0);
  const airplaneShadowY = useSharedValue(0);
  const airplaneShadowX = useSharedValue(0);
  const airplaneScale = useSharedValue(1);
  const airplaneTranlateY = useSharedValue(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showCardSelect, setShowCardSelect] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showFlyInfo, setShowFlyInfo] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleConfirm = () => {
    if (showCardSelect) {
      setShowCardSelect(false);
      setConfirm(true);
      setShowStatus(true);
    } else {
      if (from.length == 0 && to.length == 0) {
        Ale(
          "error",
          "please pick destination",
          "Please pick both destination in order to get results"
        );

      } else if (from.length > 0 && to.length == 0) {
        Ale(
          "error",
          "Your destination is required !",
          "Please make sure to fill it"
        );
      } else if (to.length > 0 && from.length == 0) {
        Ale(
          "error",
          "'From' field is required!",
          "Please make sure to fill it"
        );
      } else {
        setShowCardSelect(true);
      }
    }
  };

  useEffect(() => {
    axios

      .get("http://192.168.1.107:5001/posts")

      .then((res) => setPosts([
  {
    "post_id": 4,
    "type": "reciver",
    "departCountry": "tunisia",
    "departTime": "202020",
    "arriveCountry": "spain",
    "arriveTime": "20223",
    "content": "i need someone",
    "paymentWays": [
      "paypal"
    ],
    "acceptedItems": [
      "anything",
      "smth"
    ],
    "weight": "5",
    "postTime": "5am",
    "poster_id": 19,
    "flight_id": "Tun514"
  },
  {
    "post_id": 5,
    "type": "shipper",
    "departCountry": "Tunis",
    "departTime": "2023-01-04 13:25+01:00",
    "arriveCountry": "Tunis",
    "arriveTime": "2023-01-04 13:25+01:00",
    "content": "hi",
    "paymentWays": [],
    "acceptedItems": [],
    "weight": "0",
    "postTime": "2023-01-12T08:56:43.504Z",
    "poster_id": 19,
    "flight_id": "TU 514"
  },
  {
    "post_id": 6,
    "type": "shipper",
    "departCountry": "Tunis",
    "departTime": "2023-01-13 17:10+01:00",
    "arriveCountry": "Tunis",
    "arriveTime": "2023-01-13 17:10+01:00",
    "content": "hi",
    "paymentWays": [],
    "acceptedItems": [],
    "weight": "0",
    "postTime": "2023-01-12T08:59:22.478Z",
    "poster_id": 19,
    "flight_id": "TU 397"
  },
  {
    "post_id": 7,
    "type": "shipper",
    "departCountry": "Tunis",
    "departTime": "2023-01-13 17:10+01:00",
    "arriveCountry": "Tunis",
    "arriveTime": "2023-01-13 17:10+01:00",
    "content": "hi",
    "paymentWays": [],
    "acceptedItems": [],
    "weight": "0",
    "postTime": "2023-01-12T09:02:39.769Z",
    "poster_id": 19,
    "flight_id": "TU 397"
  }
]))
      .catch((err) => console.log(err));
    if (confirm) {
      backgroundColor.value = withTiming("#F1F1F1", { duration: 300 });
      setTimeout(() => {
        airplaneRotateZ.value = withSequence(
          withTiming(-10, { duration: 2000 }),
          withTiming(-10, { duration: 1000 }),
          withTiming(0, { duration: 1000 })
        );

        airplaneShadowY.value = withTiming(200, { duration: 4000 });
      }, 3000);
      setTimeout(() => {
        setShowStatus(false);
        backgroundColor.value = withTiming("white", { duration: 400 });
        setTimeout(() => setShowFlyInfo(true), 300);
      }, 7000);
    }
  }, [confirm]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const airplaneAnimatedStyle = useAnimatedStyle(() => {
    airplaneShadowX.value = interpolate(
      airplaneShadowY.value,
      [0, 200],
      [0, -450]
    );
    airplaneScale.value = interpolate(
      airplaneShadowY.value,
      [0, 200],
      [1, 0.8]
    );
    airplaneTranlateY.value = interpolate(
      airplaneShadowY.value,
      [0, 200],
      [0, 60]
    );

    return {
      transform: [
        { rotateZ: airplaneRotateZ.value + "deg" },
        { scale: airplaneScale.value },
        { translateY: airplaneTranlateY.value },
      ],
      shadowOffset: {
        height: airplaneShadowY.value,
        width: airplaneShadowX.value,
      },
    };
  });

  return (
    <>
      <S.Background style={backgroundAnimatedStyle} />
      <S.Container>
        <StatusBar barStyle="dark-content" />
        {!confirm && (
          <S.FlyInfo exiting={FlipOutXUp.duration(600)}>
            <S.Content>
              <S.LargeText>DelivAir</S.LargeText>

              <S.TextRowContent>
                <S.TextContent>
                  <S.SmallText>From</S.SmallText>
                  <S.HourContent>{from}</S.HourContent>
                </S.TextContent>
                <A.Center style={{ position: "absolute", left: 150 }}>
                  <Entypo name="chevron-right" size={30} color="white" />
                </A.Center>
                <S.TextContent alingment="right">
                  <S.SmallText>To</S.SmallText>
                  <S.HourContent>{to}</S.HourContent>
                </S.TextContent>
              </S.TextRowContent>
            </S.Content>
          </S.FlyInfo>
        )}
        <S.Airplane
          source={airplane}
          style={airplaneAnimatedStyle}
          resizeMode="contain"
        />
        <Cloud confirmed={confirm} bottom={200} delay={1000} />
        <Cloud confirmed={confirm} bottom={-100} delay={2000} />
        <Cloud confirmed={confirm} size="lg" bottom={-600} zIndex={9999} />
        <Cloud
          confirmed={confirm}
          noShadow
          size="lg"
          bottom={-500}
          delay={2000}
          zIndex={888}
        />

        {!confirm && (
          <S.InfoContent exiting={FadeOut.duration(600)}>
            <A.Center style={{ margin: 50 }}>
              <Text fontSize={18} style={{ paddingBottom: 100 }}>
                Please enter destination or
                <TouchableOpacity
                  onPress={() => navigation.navigate("allposts")}
                >
                  <Text
                    style={{
                      color: "#5FC8C0",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {" "}
                    Press here{" "}
                  </Text>
                </TouchableOpacity>
                to see all requests.
              </Text>
              <A.HStack>
                <Text color={"black"} top={3}>
                  <FontAwesome5 size={20} name="plane-departure" />
                </Text>

                <Input
                  maxLength={8}
                  onChangeText={(text) => setFrom(text)}
                  size="l"
                  mx="3"
                  placeholder="From"
                  w="100%"
                  borderColor="black"
                  backgroundColor="white"
                  borderWidth="1"
                  borderRadius="7"
                />
              </A.HStack>
              <A.Divider my="6" />
              <A.HStack>
                <Text color={"black"} top={3}>
                  <FontAwesome5 size={20} name="plane-arrival" />
                </Text>

                <Input
                  maxLength={8}
                  onChangeText={(text) => setTo(text)}
                  size="l"
                  mx="3"
                  placeholder="To"
                  w="100%"
                  borderColor="black"
                  backgroundColor="white"
                  borderWidth="1"
                  borderRadius="7"
                />
              </A.HStack>
            </A.Center>
          </S.InfoContent>
        )}
        {!confirm && (
          <Button showFlyInfo={showFlyInfo} onPress={handleConfirm} />
        )}
        {showCardSelect && <CardSelect />}
        {showStatus && <StatusContent />}
        {showFlyInfo && (
          <>
            <FlyContent
              posts={posts}
              from={from}
              to={to}
              navigation={navigation}
              setPosts={setPosts}
            />
            <Box style={{ zIndex: 10000, right: 196, bottom: 40 }}>
              <Footer navigation={navigation} />
            </Box>
          </>
        )}
      </S.Container>
    </>
  );
}
