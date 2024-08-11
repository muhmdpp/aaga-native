import { View, Text ,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import headPhoto from '../assets/images/img-news.png'
import { Ionicons } from '@expo/vector-icons'


const newsDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPhoto}>
        <ImageBackground source={headPhoto} style={styles.bgImage}>
        <View style={styles.shareButton}>
          <Ionicons name='share-social-outline' size={20} style={{marginTop:3,marginLeft:3}}/>
        </View>
        </ImageBackground>
      </View>
      <View style={styles.titleArea}>
        <View style={styles.titlee}>
          <Text style={{fontSize:17,fontWeight:'bold',color:'#d9dca7'}}>Genomic Study Sheds Light on How Carnivorous Asian Pitcher Plants Acquired Signature Insect Trap</Text>
        </View>
        <View style={styles.date}></View>
      </View>
      <View style={styles.contentArea}>
        <Text style={{fontSize:16,textAlign:'justify',color:"#fff"}} >A groundbreaking genetic study has unveiled a fascinating secret about the captivating pitcher plants of Asia. These botanical marvels, renowned for their insect-trapping prowess, owe their unique shape – those elegant, deadly pitchers – to a surprising phenomenon: gene duplication! This research sheds light on the evolutionary path these plants took to develop their specialized insect-catching adaptation. Imagine a world where plants, through a twist of genetic fate, multiplied their blueprint for building these intricate traps, leading to the diverse and effective pitcher shapes we see today. This discovery not only deepens our understanding of these captivating carnivores but also offers valuable insights into the power of genetic mutations to drive remarkable adaptations in the plant kingdom. </Text>
      </View>
      <View style={styles.reference}>
        <Text style={{color:'#fff'}}>REFERENCE</Text>
        <Text style={{color:'#fff'}}>The Indian Express</Text>
      </View>
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
        borderRadius:30,
        overflow:'hidden'
        
    },
    titleArea:{
        width:360,
        height:70,
        // backgroundColor:'#ff0000',
        marginTop:10,

    },
    contentArea:{
        width:360,
        height:340,
        // backgroundColor:'#00ff00',
        marginTop:10,
        // paddingRight:10
    },
    reference:{
        width:360,
        height:50,
        // backgroundColor:'#0000ff',
        marginTop:10
    },
    bgImage:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
     
    },
    shareButton:{
      height:30,
      width:30,
      backgroundColor:'#fff',
      marginBottom:10,
      marginRight:20,
      borderRadius:30
    }
  })