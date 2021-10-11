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

const FooterMenu = ({ onPressHome, onPressFavoriten, onPressEntdecken, onPressHinzufuegen, onPressUser }) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                height: 70,
                width: '100%',
                bottom: 0,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
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
                    color="white"
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
                    color="white"
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

                    name="map-outline"
                    size={40}
                    color="white"
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
                    color="white"
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
                    name='person'
                    size={40}
                    color="white"
                    onPress={onPressUser}>
                </Ionicons>
            </TouchableHighlight>





        </View>
    )
}

export default FooterMenu;