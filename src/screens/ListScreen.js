import React from 'react'
import {View, Text,StyleSheet, FlatList} from 'react-native'

const ListScreen = ()=> {
    const friends =[
        {name:'chandler'},
        {name:'monica'},
        {name:'joey'},
        {name:'rachel'},

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