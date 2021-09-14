import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const RecentCard = ({recipe, onPress}) => {
        return( <TouchableOpacity
            style={{
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
            {recipe.name}
        </Text> 
        </View>

        {/*Information*/}
        <View
            style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                paddingHorizontal: 20,
                paddingVertical: 40,
                backgroundColor: 'black',
                borderRadius: 10,
                opacity: 0.7
            }}
        >
        <Text
            style={{
                color: 'white',
            }}    
        >
            {recipe.name}
        </Text> 
        </View>
    </TouchableOpacity>
)
}

export default RecentCard;