import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const InformationRecipe = ({ text }) => {

    return(
        <View style={{
            flexDirection: 'row',
            marginTop: 15,
            marginHorizontal: 15,
            marginVertical: 15,
            borderRadius: 10,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: 'lightgrey'
        }}>
            <View style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10
                }}
                source={require("../pictures/coconut.jpg")}>

                </Image>

            </View>
            <View style={{
                flex: 1,
                paddingVertical: 10
            }}>
                <Text style={{
                    width: "70%",
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>
                    {text}
                </Text>

            </View>

        </View>
    )
}

export default InformationRecipe;