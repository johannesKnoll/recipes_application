
import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Overview } from './overview';
import  RecipeOverview  from './RecipeOverview';
import { User } from './user';
import { Favoriten } from './favoriten';
import { Entdecken } from './entdecken';
import  AddRecipe  from './addRecipe';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export function ScreenNavigation() {
  return (
<<<<<<< HEAD
      <Tab.Navigator 
      screenOptions={({ route }) => ({
=======
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
>>>>>>> 924f6be40eed90617dd0ee0dc93aedb1377a5ab4
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Übersicht') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Favoriten') {
            iconName = focused ? 'star' : 'star-outline';
          }
          else if (route.name === 'User') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Hinzufügen') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === 'Entdecken') {
            iconName = focused ? 'md-glasses' : 'md-glasses-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })
      }>
        <Tab.Screen name="Übersicht" component={Overview} />
        <Tab.Screen name="Favoriten" component={Favoriten} />
        <Tab.Screen name="Entdecken" component={Entdecken} />
        <Tab.Screen name="Hinzufügen" component={AddRecipe} />
        <Tab.Screen name="User" component={User} />

      </Tab.Navigator>
  );
}