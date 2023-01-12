import React, { useEffect } from "react";
import { StatusBar,ScrollView,SafeAreaView,StyleSheet  } from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";
import { Text, Box, Container, HStack,Divider,Center,Avatar,Heading,VStack } from "native-base";

import profile from "../../../../assets/images/profile.jpeg";
import nopic from "../../../../assets/images/nopic.jpeg";
import Footer from "../../../../../components/Footer";
import AllPosts from "../../../../../components/AllPosts";
import CardSelect from "../CardSelect - Copy";
import Swiper from "react-native-swiper";

export default function FlyContent({navigation,posts}) {
 
  
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
              <S.LargeText>LAS</S.LargeText>
            </S.TextContent>
            <S.HourContent>
              <Entypo name="chevron-right" size={30} color="white" />
            </S.HourContent>
            <S.TextContent alingment="right">
              <S.LargeText>NYC</S.LargeText>
            </S.TextContent>
          </S.TextRowContent>
          <S.TicketInfo></S.TicketInfo>
          <Box style={{ zIndex: 10002, height: 200, width: 300 }}>
            <Swiper showsPagination={false}>
              <Box width={300} style={style.graybox}>
                <Container margin={3}>
                  <HStack space={2}>
                    <VStack>
                    <Center style={style.left}>
                      <Avatar
                        source={{
                          uri: "https://ca.slack-edge.com/T03T17WCLPP-U03TQKNA1V2-9b6948bb8dc7-72",
                        }}
                      />
                    </Center>
                    <Center backgroundColor="#EBC8CB" borderRadius="5">
                      <Text>3kg</Text>
                    </Center>
                    </VStack>
                    <Center>
                    </Center>
                      <VStack>
                    <Container style={style.Middle}>
                      <Heading size="sm">Med Amine Amdouni</Heading>
                      <Text color={'grey'} >2 Days ago </Text>
                      <Text>📍Ariana,Tunis</Text>
                    </Container>
                  <Container marginTop="3" fontWeight="400">
                    <Text>Departure Time:</Text>
                    <Text>15h:43min</Text>
                  </Container>
                  </VStack>
                  </HStack>
                </Container>
             </Box>

             <Box width={300} style={style.graybox}>
                <Container margin={3}>
                  <HStack space={2}>
                    <VStack>
                    <Center style={style.left}>
                      <Avatar
                        source={{
                          uri: "https://ca.slack-edge.com/T03T17WCLPP-U03TQKNA1V2-9b6948bb8dc7-72",
                        }}
                      />
                    </Center>
                    <Center backgroundColor="#EBC8CB" borderRadius="5">
                      <Text>3kg</Text>
                    </Center>
                    </VStack>
                    <Center>
                    </Center>
                      <VStack>
                    <Container style={style.Middle}>
                      <Heading size="sm">Med Amine Amdouni</Heading>
                      <Text color={'grey'} >2 Days ago </Text>
                      <Text>📍Ariana,Tunis</Text>
                    </Container>
                  <Container marginTop="3" fontWeight="400">
                    <Text>Departure Time:</Text>
                    <Text>15h:43min</Text>
                  </Container>
                  </VStack>
                  </HStack>
                </Container>
             </Box>
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
    borderRadius:10,
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
});