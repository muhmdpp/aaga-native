import { View, Text,StyleSheet,ScrollView ,Image} from 'react-native'
import React from 'react'
import Thumbnail from '../assets/images/newsThumb.png'
import { LinearGradient } from 'expo-linear-gradient';
export default function news() {
  return (
    <View style={styles.container}> 
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#000']}
        style={styles.background} dither={true}
      />
    <ScrollView>
      <View style={styles.mainBox}>
        <View style={styles.contentArea}>
        <Text numberOfLines={2} style={{flex:1,flexWrap:'nowrap',textAlign:'left',fontWeight:'bold',paddingLeft:25,paddingTop:5,color:'#d9dca7'}}>
          Genomic Study Sheds Light on How Carnivorous Asian 
          Pitcher Plants Acquired Signature Insect Trap</Text>
          <Text numberOfLines={2} style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:25,fontStyle:'italic',paddingTop:5,color:'#fff'}}>
          Genomic Study Sheds Light on How Carnivorous Asian 
          Pitcher Plants Acquired Signature Insect Trap</Text>
        </View>
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
    backgroundColor:'',
    marginRight:5
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:0.3
  }
})