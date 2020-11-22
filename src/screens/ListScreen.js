import React from 'react'
import {View, Text,StyleSheet, FlatList} from 'react-native'

const ListScreen = ()=> {
    const friends =[
        {name:'Chandler', age:25},
        {name:'Monica',age: 26},
        {name:'Joey', age:24},
        {name:'Rachel', age:27},
        {name:'Ross', age:30}

    ]
     return (
     <FlatList 
        // horizontal
        // showHorizontalScrollbarIndicator={false}
        keyExtractor={friend => friend.name} 
        data={friends}
        renderItem={({item})=>{return <Text style={styles.textStyle}>{item.name} - Age  {item.age}</Text>}}
    />)
     
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
})

export default ListScreen
