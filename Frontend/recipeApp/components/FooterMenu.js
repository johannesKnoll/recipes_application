import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
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
            <Ionicons
                style={{
                    marginLeft: 40,
                    marginRight: 40,
                    top: '50%'
                }}
                name="home"
                size={40}
                color="white"
                onPress={onPressHome}>
            </Ionicons>

            <Ionicons
                style={{
                    marginRight: 40,
                    top: '50%'
                }}
                name="star"
                size={40}
                color="white"
                onPress={onPressFavoriten}>
            </Ionicons>
            <Ionicons
                style={{
                    marginRight: 40,
                    top: '50%'
                }}

                name="map-outline"
                size={40}
                color="white"
                onPress={onPressEntdecken}>
            </Ionicons>
            <Ionicons
                style={{
                    marginRight: 40,
                    top: '50%'
                }}
                name="add-circle"
                size={40}
                color="white"
                onPress={onPressHinzufuegen}>
            </Ionicons>
            <Ionicons
                style={{
                    marginRight: 40,
                    top: '50%'
                }}
                name='person'
                size={40}
                color="white"
                onPress={onPressUser}>
            </Ionicons>
        </View>
    )
}

export default FooterMenu;