import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';


function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,   // same as below
    paddingTop: Constants.statusBarHeight,
  }
})