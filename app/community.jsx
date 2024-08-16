import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import users from "../constants/users.json";
import mhd from "../assets/images/mhdpp.png";
import danny from "../assets/images/danny.png";
import heen from "../assets/images/heen.png";
import suhl from "../assets/images/suhl.png";
import garden from "../assets/images/garden.jpg"
const community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.searchSection}>
          <View style={styles.camera}>
            <Ionicons name="camera-outline" size={40} color={"#d9dca7"} />
          </View>
          <View style={styles.searchBox}>
            
          </View>
          <View style={styles.camera}>
            <Ionicons name="create-outline" size={40} color={"#d9dca7"} />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              marginLeft: 12,
              marginTop: 10,
            }}
          >
            STORIES
          </Text>
        </View>
        <View style={styles.storySection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.storyBoxFirst}>
              <ImageBackground
                source={mhd}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <View style={styles.addPlus}>
                  <Ionicons name="add" size={20} color={"#fff"} />
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
        {/* Post Section */}
        <View style={styles.postContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.profilePic}>
                  <Image
                    source={danny}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <View style={styles.idDetails}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                      fontWeight: "bold",
                      margin: 8,
                      marginTop: 3,
                    }}
                  >
                    Firas Ahmed Daniyal
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      marginLeft: 8,
                      marginTop: 0,
                      bottom: 10,
                    }}
                  >
                    1 hour ago
                  </Text>
                </View>
              </View>
              <View style={{ marginRight: 15 }}>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={20}
                  color={"#fff"}
                  style={{ right: 0 }}
                />
              </View>
            </View>
            <View style={styles.PostContent}>
                      <Text style={styles.postText}>Hello World, How are you, Im fine Hello World, How are you, Im fine Hello World, How are you, Im fine</Text>
            </View>
            <View style={styles.postFooter}>
                      <View style={styles.iconsArea}>
                        <Ionicons name="heart-outline" color={"#fff"} size={30}/>
                        <Ionicons name="chatbubble-outline" color={"#fff"} size={30}/>
                        <Ionicons name="arrow-redo-outline" color={"#fff"} size={30}/>
                      </View>
            </View>
{/* new Post */}
            
          </View>

          
          
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.profilePic}>
                  <Image
                    source={suhl}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <View style={styles.idDetails}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                      fontWeight: "bold",
                      margin: 8,
                      marginTop: 3,
                    }}
                  >
                    Suhail Ahmed
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      marginLeft: 8,
                      marginTop: 0,
                      bottom: 10,
                    }}
                  >
                    3 hours ago
                  </Text>
                </View>
              </View>
              <View style={{ marginRight: 15 }}>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={20}
                  color={"#fff"}
                  style={{ right: 0 }}
                />
              </View>
            </View>
            <View style={styles.PostContent}>
                      <Text style={styles.postText}>Hello World !</Text>
            </View>
            <View style={styles.postFooter}>
                      <View style={styles.iconsArea}>
                        <Ionicons name="heart" color={"#ff0000"} size={30}/>
                        <Ionicons name="chatbubble-outline" color={"#fff"} size={30}/>
                        <Ionicons name="arrow-redo-outline" color={"#fff"} size={30}/>
                      </View>
            </View>

            
          </View>

          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.profilePic}>
                  <Image
                    source={heen}
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  />
                </View>
                <View style={styles.idDetails}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                      fontWeight: "bold",
                      margin: 8,
                      marginTop: 3,
                    }}
                  >
                    Heena Fathima
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      marginLeft: 8,
                      marginTop: 0,
                      bottom: 10,
                    }}
                  >
                    9 hours ago
                  </Text>
                </View>
              </View>
              <View style={{ marginRight: 15 }}>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={20}
                  color={"#fff"}
                  style={{ right: 0 }}
                />
              </View>
            </View>
            <View style={styles.PostContent}>
                      <Text style={styles.postText}>Heyyyyy, See my Garden</Text>
                      <Image source={garden} style={{width:'100%',height:200,borderRadius:30,marginTop:10}}/>
            </View>
            <View style={styles.postFooter}>
                      <View style={styles.iconsArea}>
                        <Ionicons name="heart-outline" color={"#fff"} size={30}/>
                        <Ionicons name="chatbubble-outline" color={"#fff"} size={30}/>
                        <Ionicons name="arrow-redo-outline" color={"#fff"} size={30}/>
                      </View>
            </View>

            
          </View>
          {/* Post Section */}

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
    height: 60,
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
    marginTop: 8,
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
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "rgba(217,220,167,0.4)",
    marginBottom: 2,
  },
  storyBoxFirst: {
    backgroundColor: "#fff",
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "rgba(217,220,167,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addPlus: {
    width: 25,
    height: 25,
    backgroundColor: "#358d00",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    marginTop: 5,
    paddingTop: 8,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 500,
    backgroundColor: "#0e201d",
  },
  postHeader: {
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:'#ff0000'
  },
  profilePic: {
    width: 50,
    height: 50,
    // backgroundColor:'#fff',
    marginLeft: 8,
  },
  idDetails: {
    display: "flex",
    flexDirection: "column",
  },
  post: {
    paddingTop:10,
    backgroundColor: "#10332d",
    marginBottom:8
  },
  postFooter:{
    width:'100%',
    height:40,
    // backgroundColor:'#fff'
    borderTopWidth:0.7,
    borderTopColor:'#999999',
    // borderBottomWidth:0.5,
    // borderBottomColor:'#999999'
  },
  iconsArea:{
    display:'flex',
    flexDirection:'row',
    width: 150,
    height:'100%',
    // backgroundColor:'#ff0000',
    alignItems:'center',
    justifyContent:'space-around',
    
  },
  PostContent:{
    width:'100%',
    height:'auto',
    padding:12
  },
  postText:{
    color:'#fff',
    fontSize:20
  }
});
