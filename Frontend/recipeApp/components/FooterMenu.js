import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { flex } from 'styled-system';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';


const FooterMenu = ({ onPressHome, onPressFavoriten, onPressEntdecken, onPressHinzufuegen, onPressUser }) => {

    // const [isHome, setIsHome] = React.useState(true);
    // const [isFavorite, setIsFavorite] = React.useState(false);
    // const [isDiscover, setIsDiscover] = React.useState(false);
    // const [isAdd, setIsAdd] = React.useState(false);
    // const [isUser, setIsUser] = React.useState(false);

    // const [isToggled, setIsToggled] = React.useState(false);
    // const toggle = React.useCallback(() => setIsToggled(!isToggled));
    // const isFocused = useIsFocused();

    // const onPressHomeIn = () => {
    //     console.log("Test Favoriten");
    //     setIsHome(true);
    //     setIsFavorite(false);
    //     setIsDiscover(false);
    //     setIsAdd(false);
    //     setIsUser(false);
    //     onPressHome();
    // }

    // const onPressFavoritenIn = () => {
    //     // setTimeout(() => {
    //     //     console.log("Timeout") }, 3000
    //     // )
    //     // console.log("Test Favoriten");
    //     setIsFavorite(true);
    //     setIsHome(false);
    //     setIsDiscover(false);
    //     setIsAdd(false);
    //     setIsUser(false);
    //     onPressFavoriten();
    // }
    // React.useEffect(() => {
    //     if (!isFocused) return;
    //     // if(onPressHomeIn ){
    //     //     setIsHome(true);
    //     //     setIsFavorite(false);
    //     //     setIsDiscover(false);
    //     //     setIsAdd(false);
    //     //     setIsUser(false);
    //     //     onPressHome();
    //     // }
    //     // else if(onPressFavoritenIn) {
    //     //     console.log("Test Favoriten");
    //     //     setIsFavorite(true);
    //     //     setIsHome(false);
    //     //     setIsDiscover(false);
    //     //     setIsAdd(false);
    //     //     setIsUser(false);
    //     //     onPressFavoriten();
    //     //     }
      
    // }, [isFocused]);
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 70,
                width: '100%',
                bottom: 0,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
                position: 'fixed',
            }}
        >
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor='tomato'
                //  onPress={() => alert('Pressed!')}
                >
                <Ionicons
                    style={{
                        marginTop: 8,
                        marginLeft: 20,
                        marginRight: 20,
                        top: '50%'
                    }}
                    name="home"
                    size={40}
                    color="tomato"
                    onPress={onPressHome}>
                </Ionicons>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor='tomato'
                // onPress={() => alert('Pressed!')}
                >

                <Ionicons
                    style={{
                        marginRight:20 ,
                        marginLeft: 20,
                        marginTop: 8,
                        top: '50%'
                    }}
                    name="star"
                    size={40}
                    color="tomato"
                    onPress={onPressFavoriten}>
                </Ionicons>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor='tomato'
                // onPress={() => alert('Pressed!')}
                >
                <Ionicons
                    style={{
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 8,
                        top: '50%'
                    }}

                    name="map"
                    size={40}
                    color="tomato"
                    onPress={onPressEntdecken}>
                </Ionicons>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor='tomato'
                // onPress={() => alert('Pressed!')}
                >
                <Ionicons
                    style={{
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 8,
                        top: '50%'
                    }}
                    name="add-circle"
                    size={40}
                    color="tomato"
                    onPress={onPressHinzufuegen}>
                </Ionicons>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor='tomato'
                // onPress={() => alert('Pressed!')}
                >
                <Ionicons
                    style={{
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 8,
                        top: '50%'
                    }}
                    name="person"
                    size={40}
                    color="tomato"
                    onPress={onPressUser}>
                </Ionicons>
            </TouchableHighlight>





        </View>
    )
}

export default FooterMenu;