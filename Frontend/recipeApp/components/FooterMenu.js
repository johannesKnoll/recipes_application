import React, { Component, useEffect, useState } from 'react';
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

export const MenuItems = {
    home: 0,
    favorites: 1,
    discover: 2,
    add: 3,
    user: 4,
}

const FooterMenu = ({ onPressHome, onPressFavoriten, onPressEntdecken, onPressHinzufuegen, onPressUser, selectedMenuItem = -1 }) => {

    // const [isHome, setIsHome] = React.useState(true);
    // const [isFavorite, setIsFavorite] = React.useState(false);
    // const [isDiscover, setIsDiscover] = React.useState(false);
    // const [isAdd, setIsAdd] = React.useState(false);
    // const [isUser, setIsUser] = React.useState(false);

    // const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const [isToggled, setIsToggled] = React.useState(false);
    // const toggle = React.useCallback(() => setIsToggled(!isToggled));
    const isFocused = useIsFocused();
    // const toggle = React.useCallback(() => setIsToggled(!isToggled));

    const onPressHomeIn =  () => {
          onPressHome()
        console.log("Test home");
        setSelectedMenuItem(MenuItems.home);
        // setIsHome(true);
        // setIsFavorite(false);
        // setIsDiscover(false);
        // setIsAdd(false);
        // setIsUser(false)
    };

    // useEffect(() => {
    //     switch(selectedMenuItem) {
    //         case MenuItems.home: onPressHome(); break;
    //         case MenuItems.favorites: onPressFavoriten(); break;
    //         case MenuItems.discover: onPressEntdecken(); break;
    //         case MenuItems.add: onPressHinzufuegen(); break;
    //         case MenuItems.user: onPressUser(); break;
    //         default: console.log("Error in action: "+selectedMenuItem);
    //     }
    // },[selectedMenuItem]);

    const onMenuItemPress = (menuItemIndex) => {
        // setSelectedMenuItem(menuItemIndex);
        console.log("onMenuItemPress: "+ menuItemIndex);
        switch(menuItemIndex) {
            case MenuItems.home: onPressHome(); break;
            case MenuItems.favorites: onPressFavoriten(); break;
            case MenuItems.discover: onPressEntdecken(); break;
            case MenuItems.add: onPressHinzufuegen(); break;
            case MenuItems.user: onPressUser(); break;
            default: console.log("Error in action: "+menuItemIndex);
        }
    }


    const onPressFavoritenIn = () => {
        onPressFavoriten(); 
            console.log("Test Favoriten");
            setSelectedMenuItem(MenuItems.favorites);
            console.log("Test Favoriten item: "+selectedMenuItem);
            // setIsFavorite(true);
            // setIsHome(false);
            // setIsDiscover(false);
            // setIsAdd(false);
            // setIsUser(false);
    }

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
            <TouchableHighlight keyboardShouldPersistTaps={true}
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
                    name={selectedMenuItem == MenuItems.home? "home": "home-outline"}
                    size={40}
                    color="tomato"
                    // onPress={onPressHomeIn}
                    onPress={() => onMenuItemPress(MenuItems.home)}
                    >
                </Ionicons>
            </TouchableHighlight>
            <TouchableHighlight keyboardShouldPersistTaps={true}
            
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
                    name={selectedMenuItem == MenuItems.favorites? "star" : "star-outline"}
                    size={40}
                    color="tomato"
                    onPress={() => onMenuItemPress(MenuItems.favorites)}>
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

                    name={selectedMenuItem == MenuItems.discover ? "map" : "map-outline"}
                    size={40}
                    color="tomato"
                    onPress={()=> onMenuItemPress(MenuItems.discover)}>
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
                    name={selectedMenuItem == MenuItems.add ? "add-circle" : "add-circle-outline"}
                    size={40}
                    color="tomato"
                    onPress={() => onMenuItemPress(MenuItems.add)}>
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
                    name={selectedMenuItem == MenuItems.user ? "person" : "person-outline"}
                    size={40}
                    color="tomato"
                    onPress={() => onMenuItemPress(MenuItems.user)}>
                </Ionicons>
            </TouchableHighlight>





        </View>
    )
}

export default FooterMenu;