import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { addToFavorite, checkIfFavoriteListContainsRecipe } from '../api';

const RecentCard = ({recipe, onPress}) => {

    const [isFavorite, setIsFavorite] = React.useState(false);

    React.useEffect(() => {
        checkIfFavoriteListContainsRecipe(recipe.id)
            .then(res => {
                const isFavoriteNew = res;
                console.log(res, "Response for isFavorite");
                setIsFavorite(isFavoriteNew);
            })
        console.log(recipe.hasMeat, "Has Meat");
    },[]);

    const addFavorite = () => {
        addToFavorite(recipe.id)
            .then(res => {
                console.log(res, "Response for Add REcipe");
            })
    }

    return( 
    
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
            source={require("../pictures/picture2.jpg")}
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
                    {recipe.hasMeat??
                    recipe.name}
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
                        name={isFavorite? 'bookmark' : 'bookmark-outline'}
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
            </View>
        </TouchableOpacity>
    )
}

export default RecentCard;