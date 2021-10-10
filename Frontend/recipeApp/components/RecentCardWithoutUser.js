import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { addToFavorite, checkIfFavoriteListContainsRecipe, getUserByUserId } from '../api';
import RecipeOverview from '../screens/RecipeOverview';

const RecentCardWithoutUser = ({ recipe, onPress }) => {

    const [isFavorite, setIsFavorite] = React.useState(false);
    const [username, setUserName] = React.useState("");

    React.useEffect(() => {
        checkIfFavoriteListContainsRecipe(recipe.id)
            .then(res => {
                const isFavoriteNew = res;
                console.log(res, "Response for isFavorite");
                setIsFavorite(isFavoriteNew);
            })

        getUserByUserId(recipe.userId)
            .then(user => {
                setUserName(user.username);
            })
    }, []);

    const addFavorite = () => {
        addToFavorite(recipe.id)
            .then(res => {
                alert(res);
            })
    }

    return (

        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 350,
                width: 250,
                marginTop: 10,
                marginRight: 15,
                marginLeft: 15,
                borderRadius: 10,
            }}
            onPress={onPress}
        >

            {/*Background Image*/}
            <Image
                source={recipe.picture}
                resizeMode="cover"
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: 10
                }}
            >
            </Image>

            {/*Category*/}
            <View
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 0.5
                }}
            >
                <Text
                    style={{
                        color: 'white',
                    }}
                >
                    {recipe.hasMeat ? 'Mit Fleisch' : recipe.vegetarian ? 'Vegetarisch' : 'Vegan'}
                </Text>
            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 40,
                    left: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 0.5
                }}
            >
                <Text
                    style={{
                        color: 'white',
                    }}
                >
                    {"Von: " + username}
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
                    name={isFavorite ? 'bookmark' : 'bookmark-outline'}
                    type='ionicon'
                    color='tomato'
                    size={35}
                    onPress={addFavorite}
                />
                {/* To do: call setFavourite route on backend after onPress */}
            </View>


            {/*Information*/}
            <View
                style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 0.7
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        color: 'white',
                        fontWeight: "bold",
                        fontSize: 20
                    }}
                >
                    {recipe.name}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15,
                        flex: 1
                    }}
                >
                    {recipe.calories + ' Kalorien, ' + recipe.protein + 'g Eiweiß, ' + recipe.fat + 'g Fett'}
                </Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 10,
                            flex: 1,
                            marginTop: 10
                        }}
                    >
                        {recipe.averageRate + ' / 5 Sterne'}
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 15,
                            flex: 1,
                            marginTop: 10,
                            fontWeight: 'bold'
                        }}
                    >
                        {recipe.time + ' Minuten'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecentCardWithoutUser;