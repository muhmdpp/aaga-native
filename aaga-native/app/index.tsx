import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit the screen.</Text>
    </View>
  );
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
  }
})
