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
          title:'AAGA',
          // headerShown:false
        }}
        />
        <Tabs.Screen
        name="news"
        options={{
          title:'NEWSLETTER',
          
        }}
        />
        <Tabs.Screen
        name="myPlants"
        options={{
          title:'MY PLANTS',
          
        }}
        />
        <Tabs.Screen
        // component={newsDetails}
        name="newsDetails"
        options={{
          title:'NEWSLETTER',
          
        }}
        
        />
        <Tabs.Screen
        // component={newsDetails}
        name="shop"
        options={{
          title:'SHOP',
          
        }}
        
        />
        <Tabs.Screen
        
        name="community"
        options={{
          title:'COMMUNITY'
          
        }}
        
        />
        
    </Tabs>
  );
}


