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
import { Recipe } from '../Entities/Recipe';
import { useNavigation } from '@react-navigation/native';

export function Overview() {

    const navigation = useNavigation();
    const onPressHandler = (id) => {
      console.log(navigation)
          navigation.navigate('recipe_overview', {id:id});
    }

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

    // const navigation = useNavigation();
    // const onPressHandler = () => {
    //     console.log(navigation)
    //         navigation.navigate('recipe-overview');
    //   }

    const [recipes, setRecipes] = React.useState([]);
    const dailyRecipeArray = [];
    const [dailyRecipe, setDailyRecipe] = React.useState([]);


    React.useEffect(() => {
        login("thorstenBorsten", "password");

        getAllRecipes()
            .then(res => {
                const recipesNew = res;
                console.log("here is the res from overview line 53: ",recipesNew)
                setRecipes(recipesNew);
                console.log(res, "Recipes in Overview");
            })

        getDailyRecipe()
            .then(res => {
                const dailyRecipeNew = res;
                dailyRecipeArray.push(dailyRecipeNew)
                setDailyRecipe(dailyRecipeArray);
                console.log(dailyRecipeNew, "Daily Recipe");
            })

    },[]);

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };
console.log("test", dailyRecipeArray)


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
                data={dailyRecipeArray}
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
                                        onPress={()=>onPressHandler(item.id)}
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
                            onPress={onPressHandler}
                        >
                        </RecipeCard>
                        
                    )
                }}>

            </FlatList>
            
        </SafeAreaView>
    );
}