import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Overview } from './overview';
import { User } from './user';
import { Favoriten } from './favoriten';
import { Entdecken } from './entdecken';
import { AddRecipe } from './addRecipe';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
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
      })}>
        <Tab.Screen name="Übersicht" component={Overview} />
        <Tab.Screen name="Favoriten" component={Favoriten} />
        <Tab.Screen name="Entdecken" component={Entdecken} />
        <Tab.Screen name="Hinzufügen" component={AddRecipe} />
        <Tab.Screen name="User" component={User} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}