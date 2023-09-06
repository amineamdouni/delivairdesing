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
// import { io } from "socket.io-client";
// import { UserContext } from "../UserContext";
import { FontAwesome5 } from "@expo/vector-icons";
import ProductForm from "./Contract";
export default Messages = () => {
  const [messages, setMessages] = useState([
  {
    from: "Alex",
    fromSelf:true,
    image:"https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
    to: "Taylor",
    message: "Hi Taylor, I need to arrange a package exchange. Can you help?",
    timestamp: "2023-08-30 20:00:00"
  },
  {
    from: "Taylor",
    to: "Alex",
   image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    message: "Hello Alex, I can assist. Details please.",
    timestamp: "2023-08-30 20:02:00"
  },
  {
    from: "Alex",
    fromSelf:true,
    image:"https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
    to: "Taylor",
    message: "Thanks Taylor. I've got important documents. Let's meet at the airport tomorrow?",
    timestamp: "2023-08-30 20:05:00"
  },
  {
    from: "Taylor",
    to: "Alex",
   image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    message: "Sure, airport works. Time and how will I identify you?",
    timestamp: "2023-08-30 20:08:00"
  },
  {
    from: "Alex",
    fromSelf:true,
    image:"https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
    to: "Taylor",
    message: "10 AM near arrivals. I'll have a blue bag.",
    timestamp: "2023-08-30 20:10:00"
  },
  {
    from: "Taylor",
    to: "Alex",
   image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    message: "Noted, 10 AM by arrivals with a blue bag. Confirming.",
    timestamp: "2023-08-30 20:12:00"
  }
]);

  const [newMsg, setNewMsg] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const scrollRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState("md");
  const [reciver, setReciver] = useState("");
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  // const { chatUser, to, user } = useContext(UserContext);

  // const socket = io("http://192.168.1.107:3000/");

  // console.log("From ", chatUser._id);
  // console.log("to ", to);

   const handleSending = async () => {
    const newMessage={
    from: "Alex",
    fromSelf:true,
    image:"https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
    to: "Taylor",
    message: newMsg.text,
    timestamp: "2023-08-30 20:10:00"
  
    }
    setNewMsg('')
    setMessages(prevMessage=>[...prevMessage,newMessage])
    setTimeout(()=>{
       const newMessage = {
         from: "Taylor",
         to: "Alex",
         image:
           "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
         message: "i am next to the Ticket counter",
         timestamp: "2023-08-30 20:12:00",
       };
       setMessages((prevMessage) => [...prevMessage, newMessage]);
    },7000)
  //   console.log(newMsg["text"]);

  //   socket.emit("message", {
  //     to: to,
  //     from: chatUser._id,
  //     message: newMsg["text"],
  //   });
  //   await axios

  //     .post("http://192.168.1.107:3000/api/messages/addmsg/", {
  //       from: chatUser._id,
  //       to: to,
  //       message: newMsg["text"],
  //     })
  //     .then((res) => {
  //       console.log("success");
  //     })
  //     .catch((err) => console.log(err));

  //   const msgs = [...messages];
  //   msgs.push({ fromSelf: true, message: newMsg["text"] });
  //   setMessages(msgs);
  };
  // useEffect(() => {
  //   axios
  //     .get(`http://192.168.1.107:3000/api/users/allusers/${to}`)
  //     .then((res) => {
  //       let torec = res.data.filter((e) => e._id == to);
  //       console.log(res.data);
  //       console.log(torec, "recc");
  //       setReciver(torec);
  //     });
  // }, []);
  // console.log(reciver);
  // useEffect(() => {
  //   axios

  //     .post("http://192.168.1.107:3000/api/messages/getmsg/", {
  //       from: chatUser._id,
  //       to: to,
  //     })
  //     .then((res) => setMessages(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const renderDate = (date) => {
  //   return <Text style={styles.time}>{date}</Text>;
  // };

  // useEffect(() => {
  //   socket.on("messageResponse", (data) => {
  //     data.fromSelf = false;
  //     console.log(data);
  //     setMessages([...messages, { fromSelf: false, message: data["message"] }]);
  //   });
  // }, [socket, messages]);

  return (
    <View style={styles.container}>
      <ProductForm
        size={size}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <Box>
        <Box backgroundColor={"#FFC8CE"}>
          <Box style={styles.Header}>
            <HStack>
              <Center>
                <Heading style={styles.logo}>Jhon Doe</Heading>
              </Center>
            </HStack>
          </Box>
        </Box>
      </Box>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(message) => {
          const item = message.item;
          let inMessage = item.fromSelf === true;
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
          return (
            <View style={[styles.item, itemStyle]}>
              {inMessage && (
                <>
                  <Avatar
                    bg="green.500"
                    alignSelf="center"
                    size="xs"
                    source={{
                      uri: item.image,
                    }}
                  ></Avatar>
                  <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                  </View>
                </>
              )}
              {!inMessage && (
                <>
                  <Avatar
                    bg="green.500"
                    alignSelf="center"
                    size="xs"
                    source={{
                      uri: item.image,
                    }}
                  ></Avatar>
                  <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                  </View>
                </>
              )}
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
              value={newMsg}
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={(text) => {
                setNewMsg({ text });
              }}
            />
          </View>
        </ScrollView>
        {/* <TouchableOpacity
          onPress={() => handleSizeClick("full")}
          style={styles.btnSend}
        >
          <FontAwesome5 name="file-contract" size={20} color={"#fff"} />
        </TouchableOpacity> */}
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
    alignSelf: "flex-end",
    backgroundColor: "#5FC8C0",
  },
  itemOut: {
    alignSelf: "flex-start",
    backgroundColor: "#FFC8CE",
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
