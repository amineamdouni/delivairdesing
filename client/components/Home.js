import {
  Text,
  VStack,
  Divider,
  Header,
  Box,
  Input,
  Center,
  HStack,
  Button,
  Container,
  Heading,
  Avatar,
  ScrollView,
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const imaage = {
  uri: "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
};

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView>
        <ImageBackground source={imaage}>
          <Box>
            <Box style={style.Header}>
              <VStack>
                <Heading style={style.logo}>DeliVair</Heading>
              </VStack>
            </Box>
          </Box>
        </ImageBackground>
        <Box style={style.inputBox}>
          <HStack >
          <Container >
            <Button style={style.role}>Role</Button>
          </Container>
          <Container>
            <Button style={style.role}>Weight</Button>
          </Container>
          <Container>
            <Button style={style.role}>Country</Button>
          </Container>
          </HStack>
        </Box>
        <Box>
          <Container>
            <Text>Hello</Text>
          </Container>
        </Box>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  Header: {
    // backgroundColor: "#EBC8CB",
    paddingTop: 80,
    width: 500,
    height: 379,
    left: 0,
    top: -33,
    ImageBackground:
      "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
  },
  search: {
    width: 100,
    height: 30,
  },
  graybox: {
    color: "black",
    backgroundColor: "#EAEAEA",
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
    width: 143,
    height: 48,
    left: 12,
    top: 10,
    fontSize: 30,
  },
  inputBox: {
    width: 328,
    height: 466,
    left: 45,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: -230,
  },
  role: {
    width: 60,
    height: 35,
    left: 52,
    top: 30,
    backgroundColor:"#E7C7C8",
    borderRadius:14
  },
});
