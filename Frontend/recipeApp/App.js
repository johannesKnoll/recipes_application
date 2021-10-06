import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenNavigation } from './screens/ScreenNavigation';
import Login from './screens/login';
import SignUp from './screens/signUp';
import RecipeOverview from './screens/RecipeOverview';
import { ChangeEmail } from './screens/changeEmail';
import { ChangePassword } from './screens/changePassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login } from './api';
import { Overview } from "./screens/overview";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //<SignUp></SignUp>
    //<Login></Login>
    //  <ScreenNavigation>
    //                showHorizontalScrollIndicator={false}
    //          showVerticalScrollIndicator={false}
    //  </ScreenNavigation>
    // <RecipeOverview></RecipeOverview>
  //<ChangePassword></ChangePassword>

  <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="login_screen">
            <Stack.Screen
            name="overview_screen"
            component={ScreenNavigation}
            />
            <Stack.Screen
            name="login_screen"
            component={Login}
            />
            <Stack.Screen
            name="recipe-overview"
            component={RecipeOverview}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
