import React, { useEffect } from "react";
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo, Ionicons } from "@expo/vector-icons";

import * as S from "./profileTestcss";
import { Text, Box, Image, Center } from "native-base";

import Footer from "../Footer";

export default function FlyContent({ navigation, posts }) {
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
        <Center>
          <Image
            size={70}
            source={{
              uri: "https://i.ibb.co/sKsW4LD/Minimal-World-Travel-Blog-Suitcase-Logo-1.png",
            }}
            alt="Alternate Text"
          />
        </Center>
      </S.HeaderContent>
      <S.FlyInfo entering={FlipInXDown.duration(900).delay(100)}>
        <S.FlyInfoContent intensity={70}>
          <ScrollView>
            <Center alignItems="center">
              <Image
                size={150}
                borderRadius={100}
                source={{
                  uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059132781097140294/B5D7F24B-388D-4038-8644-F999ACD00FAE.jpg",
                }}
                alt="Alternate Text"
              />
            </Center>

            <S.FlyInfoTwo entering={FlipInXDown.duration(900).delay(800)}>
              <Center alignItems="center">
                <S.LargeText
                  style={[styles.text, { fontWeight: "bold", fontSize: 34 }]}
                >
                  Med Aziz Selini
                </S.LargeText>

                <Box marginRight={-50}>
                  <S.HeaderInfoText style={{fontSize:17 ,fontWeight: "bold"}}>
                Phone Number :<Text style={{fontSize:17}}> + 216 52 224 782</Text>
                  </S.HeaderInfoText>
                </Box>
                <Box bottom={5} marginRight={-50} right={6}>
                  <S.HeaderInfoText style={{fontSize:17 , fontWeight: "bold"}}>Email :<Text style={{fontSize:17}}> medaziz@gmail.com</Text>
                  </S.HeaderInfoText>
                </Box>
                <Box bottom={10} right={2} marginRight={-50}>
                  <S.HeaderInfoText style={{fontSize:17 ,fontWeight: "bold"}}>
                Location :<Text style={{fontSize:17}}> Boumhal El bassattine</Text>
                  </S.HeaderInfoText>
                </Box>
              </Center>
            </S.FlyInfoTwo>

            <S.FlyInfoThree entering={FlipInXDown.duration(900).delay(1500)}>
              <Center marginRight={-50}>
                <S.HeaderInfoText
                  style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}
                >
                  Contact List
                </S.HeaderInfoText>
                <Center>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141724955484200/1FCD701D-518F-48E5-98DF-F99CC2DB91C4.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>

                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141955470229585/D7C1F79F-0816-4479-9397-1CF6493F9CD7.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>

                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>
                  </ScrollView>
                </Center>
              </Center>
            </S.FlyInfoThree>
            <S.FlyInfoThree entering={FlipInXDown.duration(900).delay(1500)}>
              <Center marginRight={-50}>
                <S.HeaderInfoText
                  style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}
                >
                  Contact List
                </S.HeaderInfoText>
                <Center>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141724955484200/1FCD701D-518F-48E5-98DF-F99CC2DB91C4.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>

                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141955470229585/D7C1F79F-0816-4479-9397-1CF6493F9CD7.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>

                    <Box style={styles.mediaImageContainer}>
                      <Image
                        source={{
                          uri: "https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg",
                        }}
                        style={styles.image}
                        alt="*"
                        resizeMode="cover"
                      />
                    </Box>
                  </ScrollView>
                </Center>
              </Center>
            </S.FlyInfoThree>
          </ScrollView>
          {/* <S.TicketInfo></S.TicketInfo> */}
          <SafeAreaView>
            <ScrollView></ScrollView>
          </SafeAreaView>
        </S.FlyInfoContent>
      </S.FlyInfo>
      <Footer navigation={navigation} />
    </S.Container>
  );
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
});
