import React, { useState, useEffect, useRef, useContext } from "react";
import { Avatar, Box, HStack, Center, Heading } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import axios from "axios";
import { io } from "socket.io-client";
import { UserContext } from "../UserContext";

export default Messages = () => {
  const [messages, setMessages] = useState([]);

  const [newMsg, setNewMsg] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  const { chatUser, to, user } = useContext(UserContext);

  const socket = io("http://192.168.1.6:3000/");

  // socket.on("connection", () => {
  //   console.log("hello from socket", socket.id);
  //   //amine we can console log the connection here (socket.id)
  // });

  console.log("From ", chatUser._id);
  console.log("to ", to);

  const handleSending = async () => {
    console.log(newMsg["text"]);

    socket.emit("message", {
      to: to,
      from: chatUser._id,
      message: newMsg["text"],
    });
    await axios

      .post("http://192.168.1.6:3000/api/messages/addmsg/", {
        from: chatUser._id,
        to: to,
        message: newMsg["text"],
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: newMsg["text"] });
    setMessages(msgs);
  };

  useEffect(() => {
    axios

      .post("http://192.168.1.6:3000/api/messages/getmsg/", {
        from: chatUser._id,
        to: to,
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  const renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      data.fromSelf = false;
      console.log(data);
      setMessages([...messages, { fromSelf: false, message: data["message"] }]);
    });
  }, [socket, messages]);

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("msg-recieve", (msg) => {
  //       setArrivalMessage({ fromSelf: false, message: msg });
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <View style={styles.container}>
      <Box>
        <Box backgroundColor={"#FFC8CE"}>
          <Box style={styles.Header}>
            <HStack>
              <Center>
                <Heading style={styles.logo}>{user.userName}</Heading>
              </Center>
            </HStack>
          </Box>
        </Box>
      </Box>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(item) => {
          return item._id;
        }}
        renderItem={(message) => {
          const item = message.item;
          let inMessage = item.fromSelf === true;
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
          return (
            <View style={[styles.item, itemStyle]}>
              <Avatar
                bg="green.500"
                alignSelf="center"
                size="xs"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              ></Avatar>
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
        <ScrollView
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={(text) => setNewMsg({ text })}
            />
          </View>
        </ScrollView>

        <TouchableOpacity onPress={handleSending} style={styles.btnSend}>
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
    backgroundColor: "#5FC8C0",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 25,
    height: 25,
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 30,

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
    backgroundColor: "#FFC8CE",
  },
  itemOut: {
    alignSelf: "flex-end",
    backgroundColor: "#5FC8C0",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
    top: 40,
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
    backgroundColor: "#FFC8CE",
    paddingTop: 80,
    width: 500,
    height: 100,
    left: 0,
    top: -33,
    ImageBackground:
      "https://i.ibb.co/S6BX4nQ/eberhard-grossgasteiger-j-CL98-LGaeo-E-unsplash.jpg",
  },
  logo: {
    color: "white",
    width: 143,
    height: 48,
    left: 150,
    top: 10,
    fontSize: 17,
  },
});
