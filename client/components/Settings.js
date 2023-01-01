import { VStack,Center,HStack,Text,Box,Image, } from "native-base";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth);
export default function More({navigation}) {
  return (
    <Center>
      <Image
        style={style.backgroundImage}
        source={{
          uri: "https://wallpapers.com/images/featured/pastel-iphone-nlfoag3cyqt5aoa8.jpg",
        }}
        alt="*"
      />
      <Center style={style.footer}>
        <VStack style={style.hstack}>
          <TouchableOpacity onPress={()=>{navigation.navigate('home')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Home</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('chat')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Chat</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('profile')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Profile</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('track')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Track</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('history')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">History</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('contact')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Contact List</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('addpost')}}>
            <Box rounded="md" style={style.box}>
              <Text fontSize="3xl">Add Post</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('reclamation')}}>
            <Box style={style.box} rounded="md">
              <Text fontSize="3xl">Reclamation</Text>
            </Box>
          </TouchableOpacity>
        </VStack>
      </Center>
    </Center>
  );
}
const style = StyleSheet.create({
  footer: {
    position: "absolute",
    height: 40,
    left: 0,
    top: windowHeight - 200,
    width: windowWidth,
  },
  hstack: {
    width: windowWidth,
    height: 370,
    backgroundColor: "#EAC7CA",
    borderColor: "black",
    borderWidth: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "110%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "",
  },
  box: {
    borderBottomWidth: 1,
    borderColor: "black",
  },
});