import * as React from 'react';
import { 
    Text, 
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  RecipeCard  from '../components/RecipeCard';
import RecentCard from '../components/RecentCard';
import { SearchBar } from 'react-native-elements';
import {login, getAllRecipes, getDailyRecipe } from '../api';
import { Product } from '../Entities/User';

export function Overview({navigation}) {
    const testData = [
        {
            id: 1,
            name: "Test"
        },
        {
            id: 2,
            name: "Test2"
        },
        {
            id: 3,
            name: "Test3"
        }
    ];

    const [recipes, setRecipes] = React.useState([]);
    const [dailyRecipe, setDailyRecipe] = React.useState<Product>({
        id: 0,
        userId: 0,
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
        vegetarian: false
    });


    React.useEffect(() => {
        login("thorstenBorsten", "password");

        getAllRecipes()
            .then(res => {
                const recipesNew = res;
                setRecipes(recipesNew);
            })

        getDailyRecipe()
            .then(res => {
                const dailyRecipeNew = res;
                console.log(dailyRecipeNew, "Daily Recipe");
                setDailyRecipe(dailyRecipeNew);
            })

    },[]);

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Overview!</Text>
        // </View>
        
        <SafeAreaView
        showHorizontalScrollIndicator={false}
        showVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: "white"}}
        >
          
            <View
                style={{
                        margin: 15
                    }}
            >
                  
                <SearchBar
                    lightTheme={true}
                    placeholder="Type Here..."
                    backgroundColor="white"
                    onChangeText={updateSearch}
                    value={search}
                />
            </View>
            

            <FlatList
                data={testData}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <Text
                            style={{
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Zuletzt angesehen
                        </Text>
                        <FlatList
                            data={recipes}
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            showVerticalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => {
                                return (
                                    <RecentCard
                                        recipe={item}
                                        onPress={null}
                                    >
                                    </RecentCard>
                                )
                            }}
                        >
                        </FlatList>
                        <Text
                            style={{
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10,
                                marginTop: 35
                            }}
                        >
                            Rezept des Tages
                        </Text>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <RecipeCard
                            recipe={item}
                            onPress={null}
                        >
                        </RecipeCard>
                    )
                }}>

            </FlatList>
            
        </SafeAreaView>
    );
}