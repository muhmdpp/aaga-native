import { View, Text,StyleSheet,ScrollView ,Image} from 'react-native'
import React from 'react'
import Thumbnail from '../assets/images/newsThumb.png'
export default function news() {
  return (
    <View style={styles.container}> 
    <ScrollView>
      <View style={styles.mainBox}>
        <View style={styles.contentArea}></View>
        <View style={styles.photoBox}>
          <Image source={Thumbnail} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
      </View>
      

      </ScrollView>
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
  },
  mainBox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    width:380,
    height:100,
    backgroundColor:'#091e1a',
    marginTop:15,
    // borderCurve:10,
    borderRadius:15,
    overflow:'hidden'

  },
  photoBox:{
    height:85,
    width:100,
    backgroundColor:'#ff0000',
    alignItems:'center',
    marginRight:8,
    borderRadius:10,
    overflow:'hidden'

  },
  contentArea:{
    height:85,
    width:280,
    backgroundColor:'#ff0000',
  }
})