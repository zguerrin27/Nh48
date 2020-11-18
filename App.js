import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions } from '@react-native-community/hooks'
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import MountainDetailsScreen from './app/screens/MountainDetailsScreen';

export default function App() {
  return (
    // <WelcomeScreen></WelcomeScreen>
    //<ViewImageScreen></ViewImageScreen>
    <MountainDetailsScreen />
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