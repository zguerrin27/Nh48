import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors'

function AppButton(props){ //can just use { title } to destructure the props object
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
})