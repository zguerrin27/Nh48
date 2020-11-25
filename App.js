import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Switch } from 'react-native';

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

  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item)=> setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder='List View'
    //   />
    //   <AppTextInput icon="email" placeholder='completed' />
    // </Screen>
    // <LoginScreenFormik />
    <RegisterScreen />
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