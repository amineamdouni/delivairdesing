import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { Box, Flex, Divider, Avatar, Input, HStack } from "native-base";
import { useState } from "react";
const PersonalInformationForm = () => {
  const [selected,setSelected]=useState('settings')
  const [settings,setSettings]=useState(null)
  const [posts,setPosts]=useState(null)
  const [history,setHistory]=useState(null)
const changed=(pressed)=>{
  if(pressed==='settings'){
    setSettings("settings")
    setHistory(null)
    setPosts(null)
  }if(pressed==='posts'){
    setPosts("posts")
    setHistory(null)
    setSettings(null)
  }if(pressed==='history'){
    setHistory("history")
    setPosts(null)
    setSettings(null)
  }
}
  return (
    <Box backgroundColor={"#5FC8C0"}>
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
            <TouchableOpacity onPress={()=>{
              changed('settings')
            }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            
            <TouchableOpacity onPress={()=>{
              changed('posts')
            }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                Posts
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            <TouchableOpacity  onPress={()=>{
              changed('history')
            }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "16" }}
              >
                History
              </Text>
            </TouchableOpacity>
          </HStack>
        </Flex>
      </Box>
     {settings && <View style={styles.card}>
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
      </View>}
      {posts && <View style={styles.card}>
        
        </View>}
        {history && <View style={styles.card}>
        </View>}
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
