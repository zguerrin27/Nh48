import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions } from '@react-native-community/hooks'
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <AppText>I Love React Native!</AppText>
      <AppButton title="Login"> </AppButton>
      {/* <View style={styles.whatever}></View> */}
    </View>
    // <WelcomeScreen></WelcomeScreen>
    //<ViewImageScreen></ViewImageScreen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  whatever: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100
  }
})