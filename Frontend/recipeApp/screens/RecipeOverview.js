import React from 'react';
import { 
    Text, 
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView
} from 'react-native';
import { Icon, Divider } from 'react-native-elements';

const RecipeOverview = () => {
    return(
        <SafeAreaView
            showHorizontalScrollIndicator={false}
            showVerticalScrollIndicator={false}
            style={{
                flex: 1,
                position: 'relative'
            }}
        >

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
                    Gemüsesuppe
                </Text>
            </View>
            <View
                style={{
                    position: 'relative',
                    margin: 20,
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: 100,
                    marginBottom: 15
                }}>
                <Icon
                    style={{
                        marginRight: 50
                    }}
                    name='leaf'
                    type='font-awesome-5'
                    color='grey'
                    size={35}
                />
                <Icon
                    style={{
                        marginRight: 50
                    }}
                    name='carrot'
                    type='font-awesome-5'
                    color='grey'
                    size={35}
                />
                <Icon
                    name='drumstick-bite'
                    type='font-awesome-5'
                    color='grey'
                    size={35}
                />
            </View>


            <View
                style={{
                    left: 20,
                    position: 'absolute',
                    marginTop: 430,
                    float: 'left',
                    height: '35%',
                    width: '30%'
                }}>
                <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                Zutaten
            </Text>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{
                        margin: 10,
                        marginHorizontal: 20
                    }}>

                    <Text style={{
                        fontSize: 20
                    }}>
                        200g Kartoffeln <br></br>
                        100g Möhren <br></br>
                        250ml Wasser <br></br>
                    </Text>

                </ScrollView>
            </View>
            <View
                style={{
                    right: 20,
                    position: 'absolute',
                    marginTop: 430,
                    marginLeft: 200,
                    height: '50%',
                    width: '60%'
                }}>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>
                    Bearbeitungsschritte
                </Text>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{
                        margin: 10,
                        marginHorizontal: 20
                    }}>
                    

                    <Text style={{
                        fontSize: 21
                    }}>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. <p></p>
                        2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. <p></p>
                        3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. <p></p>
                        4. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default RecipeOverview;
