import React, { useEffect } from "react";
import { StatusBar,ScrollView,SafeAreaView } from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";
import { Text ,Box} from "native-base";

import profile from "../../../../assets/images/profile.jpeg";
import nopic from "../../../../assets/images/nopic.jpeg";
import Footer from "../../../../../components/Footer";
import CardSelect from "../CardSelect - Copy";


export default function FlyContent({navigation,posts}) {
  console.log(posts);
  
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
        <S.HeaderText bold>Your order has submited</S.HeaderText>
        <S.HeaderText>We are waiting for booking confirmation</S.HeaderText>
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
          <SafeAreaView>
            <ScrollView>
              <Box>
                {[
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ].map((e, i) => (
                  <CardSelect/>
                ))}
              </Box>
            </ScrollView>
          </SafeAreaView>
        </S.FlyInfoContent>
      </S.FlyInfo>
      <Footer navigation={navigation} />
    </S.Container>
  );
}
