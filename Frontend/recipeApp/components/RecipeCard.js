import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';

const RecipeCard = ({recipe, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                //alignItems: 'top',
                padding: 10,
                marginTop: 10,
                marginRight: 15,
                marginLeft: 15,
                borderRadius: 10,
                backgroundColor:'lightgray'
            }}
            onPress={onPress}
        >
            {/*Image*/}
            <Image
                source={require("../pictures/picture1.jpg")}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10
                }}
            >
            </Image>

            {/*Details*/}
            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20
                }}
            >
                {/*Name*/}
                <Text
                    style={{
                        fontWeight: "bold",
                        flex: 1,
                        fontSize: 20
                    }}
                >
                    {recipe.name}
                </Text>

                {/*Servings*/}
                <Text
                    style={{
                        color: 'black',
                        marginBottom: 20,
                        fontSize: 20
                    }}
                >
                    {recipe.id}
                </Text>
            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}
            >
                <Icon
                    name='bookmark-outline'
                    type='ionicon'
                    color='tomato'
                    size={35}
                />
                {/* To do: call setFavourite route on backend after onPress */}
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard;