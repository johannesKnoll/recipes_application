import React from 'react';
import { 
    Text, 
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

const RecipeOverview = () => {
    return(
        <SafeAreaView>

            <View>
                <Image
                    source={require('../pictures/picture1.jpg')}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: 270
                    }}>

                </Image>
                <Text
                    style={{
                        margin: 10,
                        textAlign: 'center',
                        fontSize: 40,
                        fontWeight: 'bold'
                    }}>
                    Hallo
                </Text>
            </View>

        </SafeAreaView>
    )
}

export default RecipeOverview;
