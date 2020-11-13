import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions } from '@react-native-community/hooks'
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableFeedbackComponent, 
  Image, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions
 } from 'react-native';

export default function App() {


  return (

      <View style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "row",  // horizontal 
        justifyContent: "center", // main
        alignItems: "center"
      }}>

        <View style={{
          backgroundColor: 'dodgerblue',
          height: 100,
          width: 100
        }}/>
        <View style={{
          backgroundColor: 'gold',
          height: 100,
          width: 100
        }}/>
        <View style={{
          backgroundColor: 'tomato',
          height: 100,
          width: 100
        }}/>

      </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
