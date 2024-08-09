import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const MyPlants = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyPlants</Text>
    </View>
  )
}

export default MyPlants

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