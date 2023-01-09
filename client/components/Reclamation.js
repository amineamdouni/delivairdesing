import React from 'react';
import { View, StyleSheet,Button,Text, ImageBackground,Image} from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';

const ReclamationForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    reclamation: Yup.string().required('Reclamation is required'),
  });



  return (
    <ImageBackground
    source={{
      uri: "https://wallpapers.com/images/featured/pastel-iphone-nlfoag3cyqt5aoa8.jpg",
    }}
    style={styles.image}
  >
    <View style={styles.formContainer}>
         <Text style={styles.title}>Reclamation !</Text>
       
    </View>
    </ImageBackground>
  );
};





















  export default ReclamationForm;