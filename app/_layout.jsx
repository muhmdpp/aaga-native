import TabBar from "@/components/TabBar";
import { Stack, Tabs } from "expo-router";
import { Button } from "react-native";
import newsDetails from "./newsDetails";
import { Ionicons } from "@expo/vector-icons";
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
          headerLeft: () => (
            <Ionicons 
              name="newspaper-outline" // Example icon name
              size={30} 
              color="#d9dca7" 
               // Adjust style as needed
              style={{marginLeft:10}}
            />
          ),
        }}
        />
        <Tabs.Screen
        name="myPlants"
        options={{
          title:'MY PLANTS',
          headerLeft: () => (
            <Ionicons 
              name="leaf-outline" // Example icon name
              size={30} 
              color="#d9dca7" 
               // Adjust style as needed
              style={{marginLeft:10}}
            />
          ),
          
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
          headerLeft: () => (
            <Ionicons 
              name="cart-outline" // Example icon name
              size={30} 
              color="#d9dca7" 
               // Adjust style as needed
              style={{marginLeft:10}}
            />
          ),
          headerRight: () => (
            <Ionicons 
              name="notifications-outline" // Example icon name
              size={30} 
              color="#d9dca7" 
               // Adjust style as needed
              style={{marginRight:20}}
            />
          ),
        }}
        
        />
        <Tabs.Screen
        
        name="community"
        options={{
          title:'COMMUNITY',
          headerStyle:{backgroundColor:'#0e201d'},
          headerRight: () => (
            <Ionicons 
              name="notifications-outline" // Example icon name
              size={24} 
              color="#d9dca7" 
              style={{ marginRight: 15 }} // Adjust style as needed
              onPress={() => {
                // Define what happens when the icon is pressed
                console.log('Cart icon pressed');
              }}
            />
          ),
          
        }}
        
        
        
        />
        
    </Tabs>
  );
}


