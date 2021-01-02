import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  //console.log(props.navigation)
  return <View>
      <Text style={styles.text}>Hi there</Text>
      <Button 
         onPress={()=> props.navigation.navigate('Components')}
        //onPress={()=> console.log(props)}
        
        title="Go to Componnents"
      />
      <TouchableOpacity onPress={()=>{console.log('list pressed')}}>
        <Text>Go to list Demos</Text>
        <Text>with touchable opacity</Text>
      </TouchableOpacity>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
