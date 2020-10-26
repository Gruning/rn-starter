import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen =()=>{
    const medio= 'youtube'
    const myName = <Text style={styles.subHeaderStyle}>Alberto Gruning</Text>
    return <View>
            <Text style={styles.textStyle}>
                Getting Started with react native</Text>
            <Text style={styles.subHeaderStyle}>
                Mi name is {myName}
            </Text>
        </View>
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
    },
    subHeaderStyle:{
        fontSize:20
    }
})
export default ComponentsScreen