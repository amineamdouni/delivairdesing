import {
  Text,
  VStack,
  Divider,
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
import { StyleSheet } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

import Footer from "./Footer";
export default function Home({navigation}) {

  const [data, setData] = useState([]);

  //---- press on ROLE button ta7t él search to logout
  // const handleSignout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       alert("Signed out");
  //       navigation.navigate("Login");
  //     })
  //     .catch((error) => {
  //       alert(err);
  //     });
  // };

  const getPosts = () => {
    axios
      .get("http:/192.168.1.6:5000/posts/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => getPosts(), []);

  return (
    <Box>
      <Box>
        <Center style={style.Header}>
          <VStack
            my="4"
            space={5}
            w="100%"
            maxW="360px"
            divider={
              <Box px="2">
                <Divider />
              </Box>
            }
          >
            <VStack w="100%" space={5} alignSelf="center">
              <Input
                style={style.search}
                placeholder="Search"
                variant="filled"
                borderRadius="30"
                py="1"
                px="2"
              />
            </VStack>
          </VStack>
        </Center>
        <Center style={style.graybox}>
          <Box style={{ color: "black" }}>
            <HStack>
              <Button style={style.searchButtons}>
                <Text>Country</Text>
              </Button>
              <Button style={style.searchButtons}>
                <Text>Time</Text>
              </Button>
              <Button style={style.searchButtons}>
                <Text>Role</Text>
              </Button>
              <Button style={style.searchButtons}>
                <Text>Weight</Text>
              </Button>
            </HStack>
          </Box>
        </Center>
        <ScrollView>
          {data.map((e) => {
            return (
              <Box>
                <Container>
                  <HStack space={2}>
                    <Center style={style.left}>
                      <Avatar
                        source={{
                          uri: "https://ca.slack-edge.com/T03T17WCLPP-U03TQKNA1V2-9b6948bb8dc7-72",
                        }}
                      />
                    </Center>
                    <Container style={style.Middle}>
                      <Heading size="sm">Med Amine Amdouni</Heading>
                      <Text>{e.postTime}</Text>
                      <Text>📍Ariana,Tunis</Text>
                    </Container>
                    <Container>
                      <Text
                        style={{
                          backgroundColor:
                            e.type === "reciver" ? "#B8E1BF" : "#EAC7CA",
                          margin: 5,
                        }}
                      >
                        {e.type}
                      </Text>
                      <Text
                        style={{
                          backgroundColor:
                            e.type === "reciver" ? "#B8E1BF" : "#EAC7CA",
                          margin: 5,
                        }}
                      >
                        3kg
                      </Text>
                      <Text
                        style={{
                          backgroundColor:
                            e.type === "reciver" ? "#B8E1BF" : "#EAC7CA",
                          margin: 5,
                        }}
                      >
                        Germany
                      </Text>
                    </Container>
                  </HStack>
                  <Container style={{ paddingLeft: 50 }} fontWeight="400">
                    <Text
                      style={{
                        backgroundColor:
                          e.type === "reciver" ? "#B8E1BF" : "#EAC7CA",
                        margin: 5,
                      }}
                    >
                      Departure Time:
                    </Text>
                    <Text
                      style={{
                        backgroundColor:
                          e.type === "reciver" ? "#B8E1BF" : "#EAC7CA",
                        margin: 5,
                      }}
                    >
                      {e.departTime}
                    </Text>
                  </Container>
                </Container>
                <Divider my={2} />
              </Box>
            );
          })}
          {/* sender profile begins here */}
          <Box>
            <Container>
              <HStack space={2}>
                <Center style={style.left}>
                  <Avatar
                    source={{
                      uri: "https://ca.slack-edge.com/T03T17WCLPP-U03TQKNA1V2-9b6948bb8dc7-72",
                    }}
                  />
                </Center>
                <Container style={style.Middle}>
                  <Heading size="sm">Med Amine Amdouni</Heading>
                  <Text>2 mins ago</Text>
                  <Text>📍Ariana,Tunis</Text>
                </Container>
                <Container>
                  <Text style={{ backgroundColor: "#B8E1BF", margin: 5 }}>
                    Sender
                  </Text>
                  <Text style={{ backgroundColor: "#B8E1BF", margin: 5 }}>
                    3kg
                  </Text>
                  <Text style={{ backgroundColor: "#B8E1BF", margin: 5 }}>
                    Germany
                  </Text>
                </Container>
              </HStack>
              <Container style={{ paddingLeft: 50 }} fontWeight="400">
                <Text>Departure Time:</Text>
                <Text>01 January 2023 at 11PM</Text>
              </Container>
            </Container>
            <Divider my={2} />
          </Box>
          {/* sender profile ends here */}
          {/* shipper profile starts here */}
          <Box backgroundColor="#F2F6F6">
            <Container>
              <HStack space={2}>
                <Center style={style.left}>
                  <Avatar
                    source={{
                      uri: "https://ca.slack-edge.com/T03T17WCLPP-U03TFHEL7FG-4e2c417ed04b-72",
                    }}
                  />
                </Center>
                <Container style={style.Middle}>
                  <Heading size="sm">Aziz Sellini</Heading>
                  <Text>2 mins ago</Text>
                  <Text>📍Ariana,Tunis</Text>
                </Container>
                <Container>
                  <Text style={{ backgroundColor: "#EAC7CA", margin: 5 }}>
                    Shipper
                  </Text>
                  <Text style={{ backgroundColor: "#EAC7CA", margin: 5 }}>
                    8kg
                  </Text>
                  <Text style={{ backgroundColor: "#EAC7CA", margin: 5 }}>
                    Sweden
                  </Text>
                </Container>
              </HStack>
              <Container style={{ paddingLeft: 50 }} fontWeight="400">
                <Text>Departure Time:</Text>
                <Text>01 January 2023 at 11PM</Text>
              </Container>
            </Container>
          </Box>
          {/* shipper profile ends here */}
          <Divider my={2} />
        </ScrollView>
      </Box>
      <Footer navigation={navigation} />
    </Box>
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
});
