import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import newsImg from "../assets/images/news-photo.png";
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={{ position: "absolute" }}>
        <View style={styles.newsBoxContainer}>
          <View style={styles.photoArea}>
            <Image
              source={newsImg}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>
        </View>

        <View style={styles.newsBoxContainer}>
          <View style={styles.photoArea}>
            <Image
              source={newsImg}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>
        </View>

        <View style={styles.newsBoxContainer}>
          <View style={styles.photoArea}>
            <Image
              source={newsImg}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>
        </View>
      </ScrollView>
      <Text style={styles.text}></Text>
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
    width: 350,
    height: 250,
    backgroundColor: "#091e1a",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    marginRight: 10,
  },
  photoArea: {
    width: 120,
    height: 220,
    backgroundColor: "#fff",
    marginRight: 15,
    borderRadius: 44,
    overflow: "hidden",
  },
});
