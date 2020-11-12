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
  const handleHomepageTouch = () => {console.log("Homepage img pressed")}
  // console.log(Dimensions.get("screen"))


  const dimensions = useDimensions()
  console.log(dimensions)

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>Welcome to NH-48!</Text>
    //   <Button title="Click Me" onPress={() => Alert.alert("My Title", "My Mesage", [
    //     { text: "Yes", onPress: () => console.log("YES") },
    //     { text: "No", onPress: () => console.log("NO") }
    //   ])}/>
    //   <TouchableHighlight onPress={handleHomepageTouch}>
    //     <Image 
    //       source={require('./assets/Main-WP.jpg')}
    //       // resizeMode="cover"
    //       style={{
    //         height: 500,
    //         width: 400
    //       }}
    //       />
    //   </TouchableHighlight>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    <SafeAreaView>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '60%'
      }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
