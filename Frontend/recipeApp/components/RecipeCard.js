import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { getUserByUserId } from '../api';

const RecipeCard = ({recipe, onPress}) => {

    
    const [username, setUserName] = React.useState("");
    React.useEffect(() => {
        getUserByUserId(recipe.userId)
            .then(user => {
                setUserName(user.username);
            })
    }, []);
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
                    flexDirection: 'row',
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
                <View
                style={{
                    position: 'absolute',
                    right: 6,
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
            <View style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 110,
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                <Text style={{
                        flex: 1,
                        color: 'black',
                        fontWeight: "bold",
                        fontSize: 10
                    }}>
                    {recipe.calories + " Kalorien     |     " + recipe.carbohydrate + "g Kohlenhydrate"}
                </Text>
                <Text style={{
                        flex: 1,
                        color: 'black',
                        fontWeight: "bold",
                        fontSize: 10
                    }}>
                    {recipe.fat + "g Fett     |     " + recipe.protein + "g Eiweiß"}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard;