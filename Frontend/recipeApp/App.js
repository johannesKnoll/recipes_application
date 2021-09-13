import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenNavigation } from './screens/ScreenNavigation';
import Login from './screens/login';
export default function App() {
  return (

    <Login></Login>
    //<ScreenNavigation></ScreenNavigation>
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
