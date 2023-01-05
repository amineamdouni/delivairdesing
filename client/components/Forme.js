import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import axios from 'axios';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  
  const handleSubmit= () => {
   axios.post('http://192.168.104.29:5000/users/add',{
    userName:username,
    phoneNumber:Number(phone),
    location:location,

   })
   .then((response) => {
    console.log(response);
   })
   .catch((error) => {
    console.log(error);
   })
  };



  


  return (
      <ImageBackground source={{uri:"https://wallpapers.com/images/featured/pastel-iphone-nlfoag3cyqt5aoa8.jpg"}} style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! let's create your profile</Text>
      <Text style= { styles.title}>Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text)=>setUsername(text)}
        style={styles.input}
      />
      <Text style= { styles.title}>Phone Number</Text>
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text)=>setPhone(text)}
        style={styles.input}
      />
      {/* <Text style= { styles.title}>Add avatar</Text>
      <View style={{ marginTop : -50}}>
      <Button title="Choose Image" onPress={handleChooseImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View> */}
  

      <Text style= { styles.title}>Add your Location</Text>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={(text)=>setLocation(text)}
        style={styles.input}
      />
      <Button
        title="Submit"
        onPress={()=>handleSubmit()}
        style={styles.button}
      />
    </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  image: {
    height: 1000,
    width: 409,
    marginBottom: 0,

  },
  button: {
    marginTop: 10,
  },
});

export default SignUpForm;
