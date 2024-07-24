import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function news() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>News</Text>
    </View>
  )
}


const styles= StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#10332d',
      
  },
  text:{
    color:'#fff'
  }
})