import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>shop</Text>
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
export default shop