import { View, Text,TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { TabBarIcon } from './navigation/TabBarIcon';
import myPlantsLogo from '../assets/images/my-plants.png'
const colors={
  dark_backgroundColor:"#10332d",
  dark_secondaryColor:"#d9dca7",
}
const icons = {
  
  index: ({ focused}) => (
    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={colors.dark_secondaryColor} size={30}/>
  ),
  news: ({ focused }) => (
    <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={colors.dark_secondaryColor} size={30}/>
  ),
  myPlants: () => (
    <Image source={myPlantsLogo} style={{height:60,width:60}}/>
  ),
  shop: ({ focused }) => (
    <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={colors.dark_secondaryColor} size={30}/>
  ),
  community: ({ focused }) => (
    <TabBarIcon name={focused ? 'play' : 'play-outline'} color={colors.dark_secondaryColor} size={30}/>
  ),
  
};

// Your TabBar component
const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]?.({
              focused: isFocused,
            })}
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    // height:"100%",
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#091e1a',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default TabBar;
