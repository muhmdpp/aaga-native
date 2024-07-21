import TabBar from "@/components/TabBar";
import { Stack, Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs 
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
          title:'News'
        }}
        />
    </Tabs>
  );
}
