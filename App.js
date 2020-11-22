import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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

export default function App() {
  return (
    // <WelcomeScreen></WelcomeScreen>
    // <ViewImageScreen></ViewImageScreen>
    // <MountainDetailsScreen />
    // <MessagesScreen />
    // <Screen>
    //   <ListItem 
    //     title='My Title'
    //     ImageComponent={<Icon name="email" />} />
    // </Screen>
    <AccountScreen />
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