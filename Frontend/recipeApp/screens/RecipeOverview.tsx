import * as React from 'react';
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
import { bottom } from 'styled-system';
import { rateRecipe, getRecipeById, login } from '../api';
import { Recipe } from '../Entities/Recipe';

function RecipeOverview({ route }){

    const [defaultRating, setDefaultRating] = React.useState(2);
    const [maxRating, setMaxRating] = React.useState([1,2,3,4,5]);
    const [recipe, setRecipe] = React.useState<Recipe>({
        id: 0,
        userId: 0,
        public: false,
        name: "",
        description: [],
        calories: 0,
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        time: 0,
        hasMeat: false,
        picture: "",
        ingredients: [],
        compynayId: 0,
        vegan: false,
        vegetarian: false,
        averageRate: 0
    });
    const { id } = route.params;
    // const [recipe, setRecipe] = React.useState<Recipe>({
    //     id: 0,
    //     userId: 0,
    //     name: "",
    //     description: [],
    //     calories: 0,
    //     protein: 0,
    //     fat: 0,
    //     carbohydrate: 0,
    //     time: 0,
    //     hasMeat: false,
    //     picture: "",
    //     ingredients: [],
    //     compynayId: 0,
    //     vegan: false,
    //     vegetarian: false,
    //     averageRate: 0
    // })

    React.useEffect(() => {
        getRecipeById(id)
            .then(res => {
                setRecipe(res);
                console.log(recipe, "Recipe to show");
                console.log(recipe.name, "Recipe to show name");
            })
    },[]);

    const starImageFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
    const starImageCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

    const rateRecipeById = () => {
        rateRecipe(id, defaultRating);
    }

    // React.useEffect(() => {
    //     getRecipeById(recipeArgument.id)
    //         .then(res => {
    //             const recipeNew = res;
    //             //setRecipe(recipeNew);
    //             //console.log(recipe, "Recipe in overview page");
    //         })
    // },[]);

    const RatingBar = () => {
        return(
            <View style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10
            }}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >

                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'cover'
                                    }}
                                    source={
                                        item <= defaultRating
                                            ? {uri: starImageFilled}
                                            : {uri: starImageCorner}
                                    }>

                                </Image>

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


    return (
        <SafeAreaView
            style={{
                flex: 1,
                position: 'relative'
            }}
        >

            <View style={{
            }}>
                <View>
                    <Image
                        source={require('../pictures/picture1.jpg')}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: 270
                        }}>

                    </Image>
                    <View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 10,
                                left: 10,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
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
                                {recipe.hasMeat ? 'Mit Fleisch' : recipe.vegetarian ? 'Vegetarisch' : 'Vegan'}
                            </Text>
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 45,
                                left: 10,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
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
                                {recipe.time + " Min."}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            margin: 10,
                            textAlign: 'center',
                            fontSize: 40,
                            fontWeight: 'bold'
                        }}>
                        {recipe.name}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            marginTop: 5,
                            textAlign: 'left',
                            fontSize: 15,
                        }}>
                        {recipe.calories + " Kalorien   |   " + recipe.carbohydrate + "g Kohlenhydrate"}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            marginTop: 5,
                            textAlign: 'left',
                            fontSize: 15,
                        }}>
                        {recipe.fat + "g Fett   |   " + recipe.protein + "g Eiweiß"}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    left: 20,
                    position: 'absolute',
                    marginTop: 430,
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
                        fontSize: 15
                    }}>
                        {recipe.ingredients.map(ingredient => {
                            return(
                                <Text>
                                    {ingredient}
                                </Text>
                            )
                        })}
                    </Text>

                </ScrollView>
                
                <RatingBar></RatingBar>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 10
                }}>
                    {defaultRating + ' / ' + maxRating.length}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 15,
                        padding: 7,
                        backgroundColor: "green"
                    }}
                    onPress={rateRecipeById}
                    >
                        <Text>
                            Rezept Bewerten
                        </Text>
                </TouchableOpacity>
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
                        fontSize: 15
                    }}>
                        {recipe.description.map(step => {
                            return(
                                <Text>
                                    {step}
                                </Text>
                            )
                        })}
                    </Text>

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}
export default RecipeOverview;