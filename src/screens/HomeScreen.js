import React from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const HomeScreen = () => {
  return <View>
      <Text style={styles.text}>Hello React Native</Text>;
      <Button title="Go to Componnents Demo"/>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
