import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Overview } from './overview';
import { User } from './user';
import { Favoriten } from './favoriten';
import { Entdecken } from './entdecken';
import  AddRecipe  from './addRecipe';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export function ScreenNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '1') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === '2') {
            iconName = focused ? 'star' : 'star-outline';
          }
          else if (route.name === '5') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === '4') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === '3') {
            iconName = focused ? 'md-glasses' : 'md-glasses-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="1" component={Overview}options={{unmountOnBlur: true}} />
        <Tab.Screen name="2" component={Favoriten}options={{unmountOnBlur: true}} />
        <Tab.Screen name="3" component={Entdecken} options={{unmountOnBlur: true}}/>
        <Tab.Screen name="4" component={AddRecipe}options={{unmountOnBlur: true}} />
        <Tab.Screen name="5" component={User} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}