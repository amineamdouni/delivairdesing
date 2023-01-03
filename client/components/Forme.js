import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text,ImagePicker  } from 'react-native';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    // submit form data
  };
  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! let's create your profile</Text>
      <Text style= { styles.title}>Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Text style= { styles.title}>Phone Number</Text>
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Text style= { styles.title}>Add avatar</Text>
      <View style={{ marginTop : -50}}>
      <Button title="Choose Image" onPress={handleChooseImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  

      <Text style= { styles.title}>Add your Location</Text>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    backgroundImage: 'url(https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2020/11/sky.jpg)',
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
    height: 150,
    width: 150,
    marginBottom: 10,

  },
  button: {
    marginTop: 10,
  },
});

export default SignUpForm;
