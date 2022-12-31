import { VStack,Center,HStack } from "native-base";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth);
export default function More() {
  return (
    <Center style={style.footer} space={4} alignItems="center">
      <VStack
        style={style.hstack}
        
       
        rounded="md"
        shadow={3}
      />
      <VStack
        style={style.hstack}
        
       
        rounded="md"
        shadow={3}
      />
      <VStack
        style={style.hstack}
        
       
        rounded="md"
        shadow={3}
      />
    </Center>
  );
}
const style = StyleSheet.create({
  footer: {
    position: "absolute",
    height: 40,
    left: 0,
    top: windowHeight - 300,
    width: windowWidth,
  },
  hstack: {
    width: windowWidth,
    height: 60,
    backgroundColor: "#EAC7CA",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
  },
});