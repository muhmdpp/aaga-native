import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import users from "../constants/users.json";
import mhd from "../assets/images/mhdpp.png";
import danny from "../assets/images/danny.png"
import heen from "../assets/images/heen.png"
import suhl from "../assets/images/suhl.png"
const community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.searchSection}>
          <View style={styles.camera}>
            <Ionicons name="camera-outline" size={40} color={"#d9dca7"} />
          </View>
          <View style={styles.searchBox}></View>
          <View style={styles.camera}>
            <Ionicons name="create-outline" size={40} color={"#d9dca7"} />
          </View>
        </View>
        <View style={styles.storySection}>
          <ScrollView horizontal={true}>
            <View style={styles.storyBoxFirst}>
              <ImageBackground  source={mhd} style={{ width: "100%", height: "100%" ,display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                  <View style={styles.addPlus}>
                    <Ionicons name="add"  size={20} color={"#fff"}/>
                  </View>
              </ImageBackground>
            </View>

            <View style={styles.storyBox}>
              <Image source={heen} style={{ width: "100%", height: "100%" }} />
            </View>
            
            <View style={styles.storyBox}>
              <Image source={danny} style={{ width: "100%", height: "100%" }} />
            </View>
            
            <View style={styles.storyBox}>
              <Image source={suhl} style={{ width: "100%", height: "100%" }} />
            </View>

            <View style={styles.storyBox}>
              <Image source={heen} style={{ width: "100%", height: "100%" }} />
            </View>
            
            <View style={styles.storyBox}>
              <Image source={danny} style={{ width: "100%", height: "100%" }} />
            </View>
            
            <View style={styles.storyBox}>
              <Image source={suhl} style={{ width: "100%", height: "100%" }} />
            </View>

            
           

          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#10332d",
  },
  text: {
    color: "#fff",
  },
  topSection: {
    width: "100%",
    height: 130,
    // backgroundColor: "#FFF",
    display: "flex",
    // flexDirection:'column',
  },
  searchSection: {
    width: "100%",
    height:60,
    backgroundColor: "#0e201d",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  storySection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    marginTop:8
    // backgroundColor: "#4d201f",
  },
  camera: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 60,
    // backgroundColor:'#ff00ff'
  },
  searchBox: {
    height: 40,
    width: 280,
    backgroundColor: "#2c3b39",
    borderRadius: 25,
  },
  storyBox: {
    backgroundColor: "#fff",
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: 8,
    borderWidth:3,
    borderColor:'rgba(217,220,167,0.4)'
  },
  storyBoxFirst:{
    backgroundColor: "#fff",
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: 8,
    borderWidth:3,
    borderColor:'rgba(217,220,167,0.4)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  addPlus:{
    width:25,
    height:25,
    backgroundColor:'#358d00',
    borderRadius:25,
    display:'flex',justifyContent:'center',alignItems:'center'
  }
});
