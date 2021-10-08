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
import { rateRecipe, getRecipeById, login } from '../api';
import { Recipe } from '../Entities/Recipe';

function RecipeOverview({ route }){

    const [defaultRating, setDefaultRating] = React.useState(2);
    const [maxRating, setMaxRating] = React.useState([1,2,3,4,5]);
    const [recipe, setRecipe] = React.useState<Recipe>({
        id: 0,
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
        rateRecipe(3, defaultRating);
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
                    {recipe.name}
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
                {recipe.hasMeat &&
                    <Icon
                        name='drumstick-bite'
                        type='font-awesome-5'
                        color='grey'
                        size={35}
                    />
                }
                {recipe.vegan &&
                    <Icon
                        style={{
                            marginRight: 50
                        }}
                        name='leaf'
                        type='font-awesome-5'
                        color='grey'
                        size={35}
                    />
                }
                {recipe.vegetarian &&
                    <Icon
                        style={{
                            marginRight: 50
                        }}
                        name='carrot'
                        type='font-awesome-5'
                        color='grey'
                        size={35}
                    />
                }
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
                        fontSize: 20
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
                    onPress={rateRecipeById}>
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
                        fontSize: 21
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