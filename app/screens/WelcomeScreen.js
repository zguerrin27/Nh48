import React from 'react';
import { ImageBackground, StyleSheet, View, Image, _Text, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/Main-WP.jpg')}
    style={styles.background}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      {/* <Text>Get Out There</Text> */}
    </View>
    <View style={styles.loginButton}>
      {/* <Text>Login</Text> */}
    </View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#922B21"
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#641E16"
  },
})

export default WelcomeScreen;