import TabBar from "@/components/TabBar";
import { Stack, Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs 
    screenOptions={{headerShown:true}}
    tabBar={props=><TabBar {...props}/>}>
      <Tabs.Screen
        name="index"
        options={{
          title:'Home'
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
    </Tabs>
  );
}
