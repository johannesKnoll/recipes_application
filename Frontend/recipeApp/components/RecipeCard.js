import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const RecipeCard = ({recipe, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'top',
                padding: 10,
                marginTop: 10,
                marginRight: 10,
                marginLeft: 10,
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
                    //fontFamily: 'Montserrat'
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
                    //fontFamily: Montserrat
                }}
            >
                {recipe.id}
            </Text>
          </View>
        </TouchableOpacity>
        

    )
}

export default RecipeCard;