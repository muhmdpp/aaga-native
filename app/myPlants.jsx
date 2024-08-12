import { View, Text,StyleSheet,ScrollView ,Image, Pressable} from 'react-native'
import React, { startTransition } from 'react'
import Thumbnail from '../assets/images/newsThumb.png'
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import plant from '../assets/images/plant.png'
import { Ionicons } from '@expo/vector-icons';
export default function myPlants() {
  return (
    <View style={styles.container}> 
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#000']}
        style={styles.background} dither={true}
      />
   
   <View style={styles.scrollableArea}>
   <ScrollView style={{position:'relative'}}>

    <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>

      <View style={styles.mainBox}>
    <View style={styles.photoBox}>
          <Image source={plant} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </View>
        <View style={styles.contentArea}>
        <Text style={{textAlign:'left',fontWeight:'bold',paddingLeft:12,paddingTop:1,color:'#d9dca7',fontSize:20}}>
        Strelitzia augusta</Text>
          <Text  style={{flex:1,flexWrap:'nowrap',textAlign:'left',paddingLeft:12,fontStyle:'italic',color:'#fff',fontSize:18}}>Strelitzia augusta</Text>
          <Text style={styles.textStyle}>Planted on: 12-08-2024</Text>
          <Text style={styles.textStyle}>Last Checked on: 12-08-2024</Text>
        </View>
       
      </View>
      </ScrollView>
      </View>

      <View style={styles.AddButton}>
        <View style={styles.plusIconArea}>
         <Ionicons name='add-circle' size={40} color={"#10332d"}/>
        </View>
        <View>
        <Text style={styles.textAdd}>Add new Plant</Text>
        </View>
      </View>
      
     
      

      
      
      
      
     
     
     
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
    justifyContent:'flex-start',
    alignItems:'center',
    width:360,
    height:120,
    backgroundColor:'#091e1a',
    marginTop:15,
    // borderCurve:10,
    borderRadius:15,
    overflow:'hidden',
    marginLeft:10,
    top:0,
    

  },
  photoBox:{
    height:120,
    width:100,
    backgroundColor:'#ff0000',
    alignItems:'center',
    // marginLeft:8,
    borderRadius:10,
    overflow:'hidden'

  },
  contentArea:{
    height:85,
    width:280,
    backgroundColor:'',
    
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:0.3
  },
  textStyle:{
    color:'#fff',
    fontStyle:'italic',
    paddingLeft:12,
    
  },
  scrollableArea:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    width:380,
    height:550,
    // backgroundColor:'#fff',
    margin:0,
    padding:0,
    bottom:85
  },
 AddButton:{
  display:'flex',
  flexDirection:'row',

  width:280,
  height:50,
  backgroundColor:'#10332d',
  bottom:50,
  borderRadius:30,
  overflow:'hidden'
 },
 plusIconArea:{
  height:50,
  backgroundColor:'#d9dca7',
  width:60,
  justifyContent:'center',
  alignItems:'center'
 },
 textAdd:{
  color:'#d9dca7',
  fontSize:20,
  marginTop:10,
  marginLeft:30,
  fontWeight:'bold'
 }
})
//10332d
//d9dca7