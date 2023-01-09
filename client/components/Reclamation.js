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
         <Formik
        initialValues={{ name: '', email: '', reclamation: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          // Send the reclamation here
          console.log(`Name: ${values.name} Email: ${values.email} Reclamation: ${values.reclamation}`);
        }}
      >
           {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View  style={styles.formFieldsContainer}>
              <Image
    source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.GBfJtHNV9InrMI8pV5OGYgHaHa&pid=Api&P=0' }} // URL or path to the image file
    style={styles.logo}
    
  />
    <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Name"
            />
             <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              onChangeText={handleChange('reclamation')}
              onBlur={handleBlur('reclamation')}
              value={values.reclamation}
              placeholder="Reclamation"
              multiline={true}
              numberOfLines={4}
            />
            {errors.reclamation && touched.reclamation && (
              <Text style={styles.error}>{errors.reclamation}</Text>
            )}
            <Button title="Send Reclamation" onPress={handleSubmit}  color={"#E7C7C8"} />
        </View>
        )}
      </Formik>
    </View>
    </ImageBackground>
  );
};





















  export default ReclamationForm;