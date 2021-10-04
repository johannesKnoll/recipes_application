import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';

const RecentCard = ({recipe, onPress}) => {
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
                    name='bookmark-outline'
                    type='ionicon'
                    color='tomato'
                    size={35}
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
                    paddingVertical: 40,
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
                    {recipe.name}
                </Text> 
            </View>
        </TouchableOpacity>
    )
}

export default RecentCard;