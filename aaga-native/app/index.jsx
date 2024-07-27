import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import newsImg from "../assets/images/news-photo.png";
import newsImg1 from "../assets/images/img-news.png";
import { Ionicons } from "@expo/vector-icons";
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={{ position: "absolute" }}>
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
      </ScrollView>
      {/* <Text style={styles.text}></Text> */}
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
    opacity: 0.5,
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
});
