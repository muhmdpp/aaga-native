import { View, Text,StyleSheet, Image,ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import banner1 from '../assets/images/banner1.jpg'
import garden from "../assets/images/garden.jpg"
const shop = () => {
  return (
    <View style={styles.container}> 
     <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#000']}
        style={styles.background} dither={true}
      />
    <View style={styles.searchBox}>
      <Ionicons name='search-outline' color={"#e5e4e2"} size={30} style={{marginLeft:10,opacity:0.3}}/>
      <Text style={{color:'#E5E4E2',fontSize:17,marginLeft:3,opacity:0.3}}>Search Plant</Text>
    </View>


    <View style={styles.banner}>
     <Image source={garden} style={styles.imageFit}/>
    </View>
    <View style={styles.scrollableFiltersContainer}>
    
      <View style={styles.filters}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        <Text style={styles.filter}>All</Text>
        </ScrollView>
      </View>
    </View>

   
  
  </View>
  )
}

export default shop

const styles= StyleSheet.create({
  container:{
    flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#10332d',
      
  },
  text:{
    color:'#fff'
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:0.3
  },
  imageFit:{
    width:'100%',
    height:'100%',
    objectFit:'cover'
  },
  searchBox:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:380,
    height:45,
    backgroundColor:'#0e201d',
    marginTop:15,
    borderRadius:10
  },
  banner:{
    marginTop:18,
    width:380,
    height:125,
    backgroundColor:'#0e201d',
    borderRadius:20,
    overflow:'hidden',
    // marginLeft:8
  },
  scrollableFiltersContainer:{
    marginTop:10,
    width:'100%',
    height:45,
    // backgroundColor:"#fff",
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  filter:{
    height:35,
    width:65,
    padding:3,
    borderWidth:1,
    borderColor:'rgba(255, 255, 255, 0.2)',
    
    borderRadius:35,
    marginLeft:10,
    fontSize:20,
    paddingLeft:20,
    color:"#fff",
    opacity:0.7

    
  },
  filters:{
    display:"flex",
    flexDirection:'row'
  }
})