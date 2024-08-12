import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const community = () => {
  return (
    <View style={styles.container}>
     <View style={styles.topSection}>
        <View style={styles.searchSection}>
          <View style={styles.camera}>
            <Ionicons name='camera-outline' size={40} color={'#d9dca7'}/>
          </View>
          <View style={styles.searchBox}></View>
          <View style={styles.camera}>
          <Ionicons name='create-outline' size={40} color={'#d9dca7'}/>
          </View>
        </View>
        <View style={styles.storySection}></View>
     </View>
    </View>
  )
}

export default community

const styles= StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor:'#10332d',
      
  },
  text:{
    color:'#fff'
  },
  topSection:{
    width:'100%',
    height:110,
    backgroundColor:'#FFF',
    display:'flex',
    // flexDirection:'column',
  },
  searchSection:{
    width:'100%',
    height:50,
    backgroundColor:'#0e201d',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  storySection:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:70,
    backgroundColor:'#4d201f'
  },
  camera:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:60,
    // backgroundColor:'#ff00ff'
  },
  searchBox:{
    height:40,
    width:280,
    backgroundColor:'#2c3b39',
    borderRadius:25
  }
})