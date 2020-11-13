import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/Main-WP.jpg')}
    style={styles.background}>
    <Image source={require('../assets/Logo.png')} />
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  }
})

export default WelcomeScreen;