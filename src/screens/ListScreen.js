import React from 'react'
import {View, Text,StyleSheet, FlatList} from 'react-native'

const ListScreen = ()=> {
    const friends =[
        {name:'chandler',key:'1'},
        {name:'monica',key:'2'},
        {name:'joey',key:'3'},
        {name:'rachel',key:'4'},

    ]
     return (
         <FlatList
            data={friends}
            renderItem={({item})=>{
            return <Text>{item.name}</Text>
            }}
         />
     )
}
const styles = StyleSheet.create({})

export default ListScreen