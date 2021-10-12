import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { getUserByUserId, addToFavorite } from '../api';

const RecipeCard = ({recipe, onPress}) => {

    
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [username, setUserName] = React.useState("");
    React.useEffect(() => {
        getUserByUserId(recipe.userId)
            .then(user => {
                setUserName(user.username);
            })
    }, []);

    const addFavorite = () => {
        setIsFavorite(!isFavorite)
        addToFavorite(recipe.id)
            .then(res => {
            //    alert(res);
            })
            //navigation.navigate('home');
    }

    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                //alignItems: 'top',
                padding: 10,
                marginTop: 10,
                marginRight: 15,
                marginLeft: 15,
                marginBottom: 85,
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
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 52,
                            left: 110,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: 'black',
                            borderRadius: 10,
                            opacity: 0.5,
                            marginLeft: 18
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
            <View style={{
                    width: '60%',
                    position: 'absolute',
                    bottom: 1,
                    left: 110,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    marginTop: 20
                }}>
                <Text style={{
                        flex: 1,
                        color: 'black',
                        fontWeight: "bold",
                        fontSize: 10
                    }}>
                    {recipe.calories + " Kalorien | " + recipe.carbohydrate + "g Kohlenhydrate | " + recipe.protein + "g Eiweiß"}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard;