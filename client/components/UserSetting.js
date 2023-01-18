import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import {
  Box,
  Flex,
  Divider,
  Avatar,
  Input,
  HStack,
  VStack,
  Center,
  ScrollView,
} from "native-base";
import { useState } from "react";
const PersonalInformationForm = () => {
  const [selected, setSelected] = useState("settings");
  const [settings, setSettings] = useState("settings");
  const [posts, setPosts] = useState(null);
  const [history, setHistory] = useState(null);
  const changed = (pressed) => {
    if (pressed === "settings") {
      setSettings("settings");
      setHistory(null);
      setPosts(null);
    }
    if (pressed === "posts") {
      setPosts("posts");
      setHistory(null);
      setSettings(null);
    }
    if (pressed === "history") {
      setHistory("history");
      setPosts(null);
      setSettings(null);
    }
  };
  return (
    <Box backgroundColor={"#5FC8C0"} height={1000}>
      <Avatar
        top={40}
        alignSelf="center"
        bg="amber.500"
        size="xl"
        source={{
          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      ></Avatar>
      <Box top={250} alignItems="center">
        <Flex direction="row" h="58" p="4">
          <HStack>
            <TouchableOpacity
              onPress={() => {
                changed("settings");
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            <TouchableOpacity
              onPress={() => {
                changed("posts");
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                Posts
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            <TouchableOpacity
              onPress={() => {
                changed("history");
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                History
              </Text>
            </TouchableOpacity>
          </HStack>
        </Flex>
      </Box>
      {settings && (
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Full Name</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="John Doe"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Email</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="john@example.com"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Phone</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="(239) 816-9029"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Mobile</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="(320) 380-4539"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Address</Text>
              </View>
              <View style={styles.inputColumn}>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  mx="0"
                  size="l"
                  style={styles.input}
                  placeholder="Bay Area, San Francisco, CA"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.emptyColumn} />
              <View style={styles.buttonColumn}>
                <Button title="Save Changes" color="white" />
              </View>
            </View>
          </View>
        </View>
      )}
      {posts && (
        <View style={styles.card}>
          <ScrollView h="80">
            <Box>
              <VStack space={4} alignItems="center">
                <Box
                  w="64"
                  h="20"
                  bg="#7CE4DC"
                  rounded="md"
                  shadow={3}
                  shadowColor={"white"}
                >
                  <Avatar
                    bg="green.500"
                    left={2}
                    top={1}
                    size="xs"
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  ></Avatar>
                  <Text style={{ color: "grey", left: 27, width: 230 }}>
                    {" "}
                    I have 2 kilos from Tunisa to Paris 5 February{" "}
                  </Text>
                </Box>

                <Box
                  w="64"
                  h="20"
                  bg="#99FFF8"
                  rounded="md"
                  shadow={3}
                  shadowColor={"white"}
                >
                  <Avatar
                    bg="green.500"
                    left={2}
                    top={1}
                    size="xs"
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  ></Avatar>
                  <Text style={{ color: "grey", left: 27, width: 230 }}>
                    {" "}
                    I have 2 kilos from Tunisa to Paris 2 March{" "}
                  </Text>
                </Box>
                <Box
                  w="64"
                  h="20"
                  bg="#B6FFFF"
                  rounded="md"
                  shadow={3}
                  shadowColor={"white"}
                >
                  <Avatar
                    bg="green.500"
                    left={2}
                    top={1}
                    size="xs"
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  ></Avatar>
                  <Text style={{ color: "grey", left: 27, width: 230 }}>
                    {" "}
                    I have 2 kilos from Tunisa to Paris 20 January{" "}
                  </Text>{" "}
                </Box>
              </VStack>
            </Box>
          </ScrollView>
        </View>
      )}
      {history && (
        <View style={styles.card}>
          <Box
            alignSelf={"center"}
            w="64"
            h="300"
            bg="#B6FFFF"
            rounded="md"
            shadow={1}
            shadowColor={"white"}
          >
            <ScrollView>
              <Box marginTop={8}>
                <Avatar
                  alignSelf={"center"}
                  bg="green.500"
                  left={2}
                  top={1}
                  size="xs"
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                ></Avatar>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 10,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  added new post
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 17,
                    color: "grey",
                    fontSize: 10,
                  }}
                >
                  21/02/2021
                </Text>
              </Box>
              <Box>
                <Avatar
                  alignSelf={"center"}
                  bg="green.500"
                  left={2}
                  top={8}
                  size="xs"
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                ></Avatar>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 35,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  reserved new Delivair
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 40,
                    color: "grey",
                    fontSize: 10,
                  }}
                >
                  13/09/2021
                </Text>
              </Box>
              <Box>
                <Avatar
                  alignSelf={"center"}
                  bg="green.500"
                  left={2}
                  top={49}
                  size="xs"
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                ></Avatar>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 55,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  changed profile photo
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    top: 60,
                    color: "grey",
                    fontSize: 10,
                  }}
                >
                  10/06/2021
                </Text>
              </Box>
            </ScrollView>
          </Box>
        </View>
      )}
    </Box>
  );
};
const styles = StyleSheet.create({
  card: {
    top: 300,
    backgroundColor: "#5FC8C0",
    borderRadius: 4,
    marginBottom: 1.5,
    shadowColor: "#dadae3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 2,
  },
  cardBody: {
    padding: 70,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  labelColumn: {
    width: 80,
    right: 30,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  inputColumn: {
    flex: 1,
  },
  input: {},
  emptyColumn: {
    width: 80,
  },
  buttonColumn: {
    left: 80,
    top: 20,
  },
});

export default PersonalInformationForm;
