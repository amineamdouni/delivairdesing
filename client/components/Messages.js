import React, { useState, useEffect } from "react";
import { Box, HStack, Center, Heading } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import axios from "axios";

export default Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .post("http://192.168.1.9:3000/api/messages/getmsg/", {
        from: "63b5490436c92210d680f46d",
        to: "63b54b3536c92210d680f473",
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [newMsg, setNewMsg] = useState();

  const renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };

  return (
    <View style={styles.container}>
      <Box>
        <Box backgroundColor={"#E7C7C8"}>
          <Box style={styles.Header}>
            <HStack>
              <Center>
                <Heading style={styles.logo}>DeliVair</Heading>
              </Center>
            </HStack>
          </Box>
        </Box>
      </Box>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(item) => {
          console.log(item);
          return item._id;
        }}
        renderItem={(message) => {
          const item = message.item;
          let inMessage = item.fromSelf === true;
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
          return (
            <View style={[styles.item, itemStyle]}>
              {!inMessage && renderDate(item.createdAt)}
              <View style={[styles.balloon]}>
                <Text>{item.message}</Text>
              </View>
              {inMessage && renderDate(item.createdAt)}
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Write a message..."
            underlineColorAndroid="transparent"
            onChangeText={(msg) => setNewMsg({ msg })}
          />
        </View>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={{
              uri: "https://img.icons8.com/small/75/ffffff/filled-sent.png",
            }}
            style={styles.iconSend}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    paddingHorizontal: 13,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: "flex-start",
    backgroundColor: "#EAC7CA",
  },
  itemOut: {
    alignSelf: "flex-end",
    backgroundColor: "##5FC8C0",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#E0FFFF",
    borderRadius: 300,
    padding: 5,
  },
  Header: {
    backgroundColor: "#EBC8CB",
    paddingTop: 80,
    width: 500,
    height: 100,
    left: 0,
    top: -33,
    ImageBackground:
      "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
  },
  logo: {
    width: 143,
    height: 48,
    left: 12,
    top: 10,
    fontSize: 30,
  },
});
