import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen =()=>{
    const medio= 'youtube'
    return (
        <View>
            <Text style={styles.textStyle}>Precalculo</Text>
            <Text>Larson 2018</Text>
            <Text>Stewart 7ma edicion</Text>
            <Text style={styles.textStyle}>Estadistica</Text>
            <Text>Introduccion  la estadistica</Text>
            <Text style={styles.textStyle}>Curso CISCO</Text>
            <Text>buscar youtube</Text>
            <Text style={styles.textStyle}>Curso C++</Text>
            <Text>buscar en  {medio} tutoriales POO C++</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})
export default ComponentsScreen