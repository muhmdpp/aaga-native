import TabBar from "@/components/TabBar";
import { Stack, Tabs } from "expo-router";
import { Button } from "react-native";
import newsDetails from "./newsDetails";

export default function _layout() {
  return (
    <Tabs 
    screenOptions={{headerShown:true, headerStyle:{backgroundColor:'#10332d'},headerTintColor:'#d9dca7'}}
    tabBar={props=><TabBar {...props}/>}>
      <Tabs.Screen
        name="index"
        options={{
          title:'aaga',
          // headerShown:false
        }}
        />
        <Tabs.Screen
        name="news"
        options={{
          title:'News',
          
        }}
        />
        <Tabs.Screen
        name="myPlants"
        options={{
          title:'My Plants',
          
        }}
        />
        <Tabs.Screen
        // component={newsDetails}
        name="newsDetails"
        options={{
          title:'News Diled',
          
        }}
        
        />
    </Tabs>
  );
}


