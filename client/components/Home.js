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
          <HStack>
            
            <Container>
              <Button style={style.role}><Text color={"black"}>Role</Text></Button>
            </Container>
            <Container>
              <Button style={style.role}><Text color={"black"}>Weight</Text></Button>
            </Container>
            <Container>
              <Button style={style.role}><Text color={"black"}>Country</Text></Button>
            </Container>
            <Container>
              <Button style={style.date}><Text color={"black"}>Date</Text></Button>
              <Box style={style.inputdate}>
                <Input mx="3" keyboardType="date" placeholder="DD/MM/YYYY" w="100%" />
              </Box>
            </Container>
            <Container>
              <Button style={style.from }><Text color={"black"}>From</Text></Button>
              <Box style={style.inputfrom}>
              <Input mx="3" placeholder="from" w="100%" />
              </Box>
            </Container>
            <Container>
              <Button style={style.to}><Text color={"black"}>To</Text></Button>
              <Box style={style.inputto}>
                <Input placeholder="to" ></Input>
              </Box>
            </Container>
            <Container>
              <Button style={style.submit}>Submit</Button>
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
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,

    elevation: 6,
    shadowColor: "black",
    width: 328,
    height: 466,
    left: 45,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: -230,
  },
  role: {
    marginLeft: 10,
    width: 75,
    height: 36,
    left: 35,
    top: 30,
    backgroundColor: "#E7C7C8",
    borderRadius: 14,
  },
  date: {
    width: 75,
    height: 36,
    left: -210,
    top: 130,
    backgroundColor: "#E7C7C8",
    borderRadius: 14,
  },
  from: {
    width: 75,
    height: 36,
    left: -360,
    top: 210,
    backgroundColor: "#E7C7C8",
    borderRadius: 14,
  },
  to: {
    width: 75,
    height: 36,
    left: -510,
    top: 290,
    backgroundColor: "#E7C7C8",
    borderRadius: 14,
  },
  inputdate: {
    
    width: 150,
    height: 36,
    left: -120,
    top: 95,
  },
  inputfrom: {
    width: 150,
    height: 36,
    left: -270,
    top: 175,
    
  },
  inputto: {
    width: 150,
    height: 36,
    left: -410,
    top: 255,
    
  },
  submit: {
    width: 150,
    height: 36,
    left: -480,
    top: 390,
    borderRadius:20,
    width:90,
    backgroundColor: "black",
  }

});
