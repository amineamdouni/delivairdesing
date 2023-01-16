import React from "react";
import {
  Modal,
  Button,
  ScrollView,
  Text,
  Center,
  VStack,
  Input,
  NativeBaseProvider,
  FormControl
} from "native-base";
import { StyleSheet } from "react-native";
const ProductForm = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  const createProduct=()=>{

  }
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.CloseButton />

          <Modal.Body>
            <ScrollView>
              <FormControl>
                 <FormControl.Label> smth </FormControl.Label>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  
                  size="l"
                  placeholder="weight"
                  style={style.Input}
                  onChangeText={(text) => setEmail(text)}
                />
              </FormControl>
              <FormControl >
                <FormControl.Label> smth </FormControl.Label>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  
                  size="l"
                  placeholder="weight"
                  style={style.Input}
                  onChangeText={(text) => setEmail(text)}
                />
              </FormControl>
              <FormControl >
                <FormControl.Label> smth </FormControl.Label>
                <Input
                  variant="rounded"
                  borderColor={"white"}
                  placeholderTextColor={"white"}
                  
                  size="l"
                  placeholder="weight"
                  style={style.Input}
                  onChangeText={(text) => setEmail(text)}
                />
              </FormControl>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Center>
        <VStack top={300} space={4}>
          {/* place this near the send message in the chat */}
          <Button
            onPress={() => handleSizeClick("full")}
            key={size}
          >{`Open ${size} Modal`}</Button>
        </VStack>
      </Center>
    </>
  );
};

export default ProductForm;

const style = StyleSheet.create({
 
  Input: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  
});
