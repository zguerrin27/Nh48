import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet, View, TextInput, Text, Switch, Image, Button } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import MountainDetailsScreen from './app/screens/MountainDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import MountainsScreen from './app/screens/MountainsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import LoginScreenFormik from './app/screens/LoginScreenFormik';
import RegisterScreen from './app/screens/RegisterScreen';



const categories = [
  { label: "All Mountains", value: 1 },
  { label: "Completed", value: 2 },
  { label: "Not Completed", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
    // if(!result.granted)alert("You must grant access to photo library. ")

    const result = await ImagePicker.getCameraRollPermissionsAsync();
    if(!result.granted) alert("You must grant access to photo library. ")
    
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) setImageUri(result.uri)
    } catch (error) {
      console.log('error reading an image')
    }
  };

  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item)=> setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder='List View'
    //   />
    // </Screen>
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={ { uri: imageUri } } style={{width: 200, height: 200}} />
    </Screen>
    // <MountainsScreen />
    // <MountainDetailsScreen />
    // <AccountScreen />
    // <LoginScreenFormik />
    // <RegisterScreen />
    // <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
})