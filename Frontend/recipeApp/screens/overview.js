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
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  RecipeCard  from '../components/RecipeCard';
import RecentCard from '../components/RecentCard';
import { SearchBar } from 'react-native-elements';
import {login, getAllRecipes, getDailyRecipe, getRecentlyViewed, logAPI } from '../api';
import { Recipe } from '../Entities/Recipe';
import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../components/FooterMenu';
import { getFavoriteRecipes, getAllRecipesFromUser } from '../api';
import Information from '../components/Information';

export function Overview() {
    
    const navigation = useNavigation();
    const onPressHandlerHome = () => {
      console.log(navigation)
          navigation.navigate('home');
    }
    const onPressHandlerFavoriten = () => {
      console.log(navigation)
          navigation.navigate('favoriten');
    }
    const onPressHandlerEntdecken = () => {
      console.log(navigation)
          navigation.navigate('entdecken');
    }
    const onPressHandlerHinzufuegen = () => {
      console.log(navigation)
          navigation.navigate('hinzufuegen');
    }
    const onPressHandlerUser = () => {
      console.log(navigation)
          navigation.navigate('user');
    }
    const onPressHandlerRecipeOverview = (id) => {
      console.log(navigation)
          navigation.navigate('recipe-overview', {id: id});
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

    // const onPressHandler = () => {
    //     console.log(navigation)
    //         navigation.navigate('recipe-overview');
    //   }

    const [recipes, setRecipes] = React.useState([]);
    const dailyRecipeArray = [];
    const [dailyRecipe, setDailyRecipe] = React.useState([]);
    const isFocused = useIsFocused();
   // let recipe;


    React.useEffect(() => {
        console.log("overview.js useEffect")
        if (!isFocused) return;
         logAPI();

        getRecentlyViewed()
            .then(res => {
                const recipesNew = res;
                console.log("here is the res from overview line 53: ",recipesNew)
                setRecipes(recipesNew);
                setFilteredData(recipesNew);
                console.log(res, "Recipes in Overview");
            })

        getDailyRecipe()
            .then(res => {
                setDailyRecipe(res)
                console.log(res, "Daily Recipe");
            })
            getFavoriteRecipes()
            .then(res => {
                const favoriteRecipesNew = res;
                setFavoriteRecipes(favoriteRecipesNew);
            })

    },[isFocused]);
    const [favoriteRecipes, setFavoriteRecipes] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");

    const updateSearch = (text) => {
      // setSearch(search);

      if(text){
          const newData = recipes.filter((item) => {
              const itemData = item.name ?
                            item.name.toUpperCase()
                            : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > 1;
          });
          setFilteredData(newData);
          setSearch(text);
      } else{
          setFilteredData(recipes);
          setSearch(text);
      }
    }


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
                    placeholder="Hier Suchbegriff eingeben"
                    backgroundColor="white"
                    onChangeText={(text) => updateSearch(text)}
                    value={search}
                />
            </View>
            

            <FlatList
                data={dailyRecipe}
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
                        {recipes.length === 0 &&
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 30,
                                marginBottom: 10,
                                color: 'tomato'
                            }}>
                                Noch keine Rezepte angesehen
                            </Text>
                        }
                        <FlatList
                            data={filteredData}
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            showVerticalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => {
                                return (
                                    <RecentCard
                                        recipe={item}
                                       
                                        onPress={() => {
                                            navigation.navigate('recipe-overview', {id: item.id});
                                        }}
                                    >
                                    </RecentCard>
                                )
                            }}
                            >
                        </FlatList>
                        <Information text="Heute schon etwas getrunken?" />
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
                        {dailyRecipe.length === 0 &&
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 30,
                                marginBottom: 10,
                                color: 'tomato'
                            }}>
                                Keine Daten verfügbar
                            </Text>
                        }
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <RecipeCard
                            recipe={item}
                            onPress={() => {
                                navigation.navigate('recipe-overview', {id: item.id});
                            }}
                        >
                        </RecipeCard>
                        
                    )
                }}>

</FlatList>
            <FooterMenu onPressHome={onPressHandlerHome}
                onPressFavoriten={onPressHandlerFavoriten}
                onPressEntdecken={onPressHandlerEntdecken}
                onPressHinzufuegen={onPressHandlerHinzufuegen}
                onPressUser={onPressHandlerUser}></FooterMenu>
        </SafeAreaView>
    );
}