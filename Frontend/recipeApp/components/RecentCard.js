import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RecentCard = ({recipe, onPress}) => {
        return( <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: 10,
                marginRight: 20,
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
                top: 20,
                left: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'Gray',
                borderRadius: 10
            }}
        >
        </View>

        <Text
            style={{
                color: 'white'
            }}    
        >
            {recipe.name}
        </Text> 
    </TouchableOpacity>
)
}

export default RecentCard;