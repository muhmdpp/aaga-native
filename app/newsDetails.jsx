import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const newsDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPhoto}></View>
      <View style={styles.titleArea}>
        <View style={styles.titlee}></View>
        <View style={styles.date}></View>
      </View>
      <View style={styles.contentArea}></View>
      <View style={styles.reference}></View>
    </View>
  )
}

export default newsDetails

const styles= StyleSheet.create({
    container:{
      flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor:'#10332d',
          flexDirection:'column'
        
    },
    text:{
      color:'#fff'
    },
    topPhoto:{
        width:360,
        height:150,
        backgroundColor:'#fff',
        marginTop:20,
        borderRadius:30
        
    },
    titleArea:{
        width:360,
        height:70,
        backgroundColor:'#ff0000',
        marginTop:10,

    },
    contentArea:{
        width:360,
        height:340,
        backgroundColor:'#00ff00',
        marginTop:10
    },
    reference:{
        width:360,
        height:50,
        backgroundColor:'#0000ff',
        marginTop:10
    }
  })