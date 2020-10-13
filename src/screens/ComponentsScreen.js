import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen =()=>{
    return (
        <View>
            <Text style={styles.textStyle}>Precalculo</Text>
            <Text>Larson 2018</Text>
            <Text>Stewart 7ma edicion</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})
export default ComponentsScreen