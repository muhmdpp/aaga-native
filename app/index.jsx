import { Text, View, StyleSheet, Image, ScrollView,ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import newsImg from "../assets/images/news-photo.png";
import React, { useState, useEffect } from 'react';
import newsImg1 from "../assets/images/img-news.png";
import { Ionicons } from "@expo/vector-icons";
import homeImg from '../assets/images/home-trs.png';
import searcIcon from '../assets/images/search.png'
import appLogo from '../assets/images/search-ficon.png'
import weatherLogo from '../assets/images/cloud.png'
import plantnews from '../assets/images/plant.png'
// import { useFonts,Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Index() {
  
  return (
 
    
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#000']}
        style={styles.background} dither={true}
      />
      <View style={styles.topSection}>
        <ImageBackground source={homeImg} style={styles.bgImage}>
          <View style={styles.weatherArea}>
            <View style={styles.textPart}>
              <Text style={{fontSize:20,marginTop:10,marginLeft:5,color:'#fff'}}>Weather</Text>
              <Text style={{fontSize:12,marginTop:10,marginLeft:5,color:'#fff'}}>Chennai, 01 August</Text>
              <Text style={{fontSize:30,marginTop:10,marginLeft:5,fontWeight:'bold',color:'#fff'}}>27° C</Text>
            </View>
            <View style={styles.iconPart}>
              <Image source={weatherLogo} style={{width:'70%',height:'70%',objectFit:'contain',marginBottom:30}}/>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchInput}>
          <View style={styles.appLogo}>
            <Image source={appLogo} style={{width:'100%',height:'70%',objectFit:'contain',marginLeft:3,marginTop:5}}/>
          </View>
          <View style={styles.textInput}>
            <Text style={{fontSize:20,marginTop:10,marginLeft:4}}>Search Plant</Text>
          </View>
        </View>
        <View style={styles.searchIcon}>
        <Image source={searcIcon} style={{width:'50%',height:'80%',objectFit:'contain'}}/>
        </View>
      </View>
      <View style={styles.explore}></View>
      <View style={styles.newsTContainer}>
      <ScrollView horizontal={true} style={{ position: "relative" }} showsHorizontalScrollIndicator={false}>
        <View style={styles.newsBoxContainer}>
          <View style={styles.contentArea}>
            <Text numberOfLines={3} style={styles.titleText}>
              Genomic Study Sheds Light on How Carnivorous Asian Pitcher Plants
              Acquired Signature Insect Trap
            </Text>
            <View style={styles.date}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color={"#fff"}
                style={{ marginTop: 1, marginLeft: 5 }}
              />
              <Text style={{ marginTop: 1, marginLeft: 5, fontWeight: "bold" ,color:'#fff'}}>
                27-07-2024
              </Text>
            </View>
            <View style={styles.textContent}>
              <Text numberOfLines={5} style={{marginTop:2,color:'#fff',fontStyle:'italic',marginLeft:5}} >
                Genomic Study Sheds Light on How Carnivorous Asian Pitcher
                Plants Acquired Signature Insect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquired Carnivorous Asian Pitcher
                Plants Acquired Signature Insect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquiredect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquired Carniv
              </Text>
            </View>
            <Text style={{fontWeight:'bold',marginTop:6,color:'#d9dca7',marginLeft:5}}>READ MORE</Text>
          </View>
          <View style={styles.photoArea}>
            <Image
              source={newsImg}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>
        </View>

        <View style={styles.newsBoxContainer}>
          <View style={styles.contentArea}>
            <Text numberOfLines={3} style={styles.titleText}>
              Genomic Study Sheds Light on How Carnivorous Asian Pitcher Plants
              Acquired Signature Insect Trap
            </Text>
            <View style={styles.date}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color={"#fff"}
                style={{ marginTop: 1, marginLeft: 5 }}
              />
              <Text style={{ marginTop: 1, marginLeft: 5, fontWeight: "bold" ,color:'#fff'}}>
                27-07-2024
              </Text>
            </View>
            <View style={styles.textContent}>
              <Text numberOfLines={5} style={{marginTop:2,color:'#fff',fontStyle:'italic',marginLeft:5}} >
                Genomic Study Sheds Light on How Carnivorous Asian Pitcher
                Plants Acquired Signature Insect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquired Carnivorous Asian Pitcher
                Plants Acquired Signature Insect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquiredect TrapGenomic Study Sheds Light
                on How Carnivorous Asian Pitcher Plants Acquired Carniv
              </Text>
            </View>
            <Text style={{fontWeight:'bold',marginTop:6,color:'#d9dca7',marginLeft:5}}>READ MORE</Text>
          </View>
          <View style={styles.photoArea}>
            <Image
              source={plantnews}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>
        </View>

        

        
      </ScrollView>
      {/* <Text style={styles.text}></Text> */}
      </View>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#10332d",
  },
  text: {
    color: "#fff",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.3,
  },
  newsBoxContainer: {
    display: "flex",
    flexDirection: "row",
    width: 350,
    height: 250,
    backgroundColor: "#091e1a",
    borderRadius: 50,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
    // top:220
  },
  photoArea: {
    width: 120,
    height: 220,
    backgroundColor: "#fff",
    marginRight: 5,
    borderRadius: 44,
    overflow: "hidden",
    position: "absolute",
    right: 10,
  },
  contentArea: {
    width: 190,
    height: 220,
    // backgroundColor: "#fff",
    marginLeft: 12,
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#d9dca7",
    // fontFamily:'Poppins_700Bold'
  },
  date: {
    // backgroundColor: "#999999",
    width: 190,
    height: 25,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  textContent: {
    color:'#fff'
  },
  topSection:{
    height:300,
    // backgroundColor:'#fff',
    width:'100%',
    position:'absolute',
    top:0,
    
  },
  newsTContainer:{
    width:'100%',
    height:260,
    // backgroundColor:'#fff',
    top:80,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  },
  searchBox:{
    
    width:'100%',
    // backgroundColor:'#fff',
    height:55,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    top:30

    // mariginL
  },
  searchInput:{
    height:'90%',
    width:'70%',
    backgroundColor:'#ff0000',
    borderRadius:25,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row'
    // marginLeft:10
  },
  searchIcon:{
    backgroundColor:'#d9dca7',
    height:'90%',
    width:'15%',
    borderRadius:40,
    marginLeft:10,
    display:'flex',
    justifyContent:'center',
    alignItems:"center"
    
  },
  appLogo:{
    height:'100%',
    width:60,
    backgroundColor:'#d9dca7'
  },
  textInput:{
    height:'100%',
    width:240,
    backgroundColor:'#d9dca7'
  },
  explore:{
    width:'70%',
    height:2,
    backgroundColor:'#fff',
    top:50,
    
  },
  weatherArea:{
    width:350,
    height:130,
    backgroundColor:'rgba(0, 0, 0, 0.2)', //Opacity Adjustmnts,
    // backgroundColor:'#fff',
    borderRadius:25,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    overflow:'hidden',
    // opacity:0.5

  },
  bgImage:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textPart:{
    height:150,
    width:110,
    // backgroundColor:'#fff'
  },
  iconPart:{
    height:150,
    width:150,
    // backgroundColor:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:2
    }
});
