import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import SignUp from './screens/signUp';
import { ChangeEmail } from './screens/changeEmail';
import { ChangePassword } from './screens/changePassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { login } from './api';
import { Overview } from "./screens/overview";
import RecipeOverview from './screens/RecipeOverview';
const Tab = createBottomTabNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User } from './screens/user';
import { Favoriten } from './screens/favoriten';
import { Entdecken } from './screens/entdecken';
import AddRecipe from './screens/addRecipe';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenContainer } from 'react-native-screens';
import { ScreenNavigation } from './screens/ScreenNavigation';
import { ChangeUsername } from './screens/changeUsername';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //<SignUp></SignUp>
    //<Login></Login>
    //  <ScreenNavigation>
    //                showHorizontalScrollIndicator={false}
    //          showVerticalScrollIndicator={false}
    //  </ScreenNavigation>
    //<RecipeOverview></RecipeOverview>
    //<ChangePassword></ChangePassword>

    /*
    <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen
              name="login_screen"
              component={Login}
              />
              <Stack.Screen
              name="overview_screen"
              component={Overview}
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
  */


    <NavigationContainer>
      {/* <Stack.Screen
          name="tab_navigation"
          component={ScreenNavigation}
        /> */}
      {/* <Stack.Screen
          name="overview_screen"
          component={Overview}
        /> */}
      {/* <Stack.Screen
            name="login_screen"
            component={Login}
            /> */}
      <Stack.Navigator>
         <Stack.Screen
          name="login_screen"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />  */}
        <Stack.Screen
          name="home"
          component={Overview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recipe-overview"
          component={RecipeOverview}
        />
        <Stack.Screen
          name="favoriten"
          component={Favoriten}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="entdecken"
          component={Entdecken}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="hinzufuegen"
          component={AddRecipe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="changePassword"
          component={ChangePassword}

        />
        <Stack.Screen
          name="changeUsername"
          component={ChangeUsername}

        />
        <Stack.Screen
          name="changeEmail"
          component={ChangeEmail}

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
