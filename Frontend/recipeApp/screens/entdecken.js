
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
import { getMeatRecipes, getVeganRecipes, getVegetarianRecipes } from '../api';
import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../components/FooterMenu';
import { logAPI } from '../api';
import { getFavoriteRecipes, getAllRecipesFromUser } from '../api';

export function Entdecken() {


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

    const [veganRecipes, setVeganRecipes] = React.useState([]);
    const [vegetarianRecipes, setVegetarianRecipes] = React.useState([]);
    const [meatRecipes, setMeatRecipes] = React.useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = React.useState([]);

  const isFocused = useIsFocused();
    React.useEffect(() => {
        console.log("entdecken.js useEffect")
        if (!isFocused) return;
        logAPI();
        getFavoriteRecipes()
        .then(res => {
            const favoriteRecipesNew = res;
            setFavoriteRecipes(favoriteRecipesNew);
        })
        getVeganRecipes()
            .then(res => {
                const recipesNew = res;
                setVeganRecipes(recipesNew);
            })
            
            getVegetarianRecipes()
            .then(res => {
                const vegetarianRecipeNew = res;
                setVegetarianRecipes(vegetarianRecipeNew);
                console.log(res, "Vegetarian Products");
            })
    
            getMeatRecipes()
            .then(res => {
                const meatRecipesNew = res;
                setMeatRecipes(meatRecipesNew);
            })
            
            console.log(veganRecipes, "Vegan recipes");
        },[isFocused]);

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
        <SafeAreaView
            showVerticalScrollIndicator={false}
            showHorizontalScrollIndicator={false}
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
                                marginTop: 20,
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Vegan
                        </Text>
                        <View>
                            <FlatList
                                data={veganRecipes}
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
                        </View>
                        <Text
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Vegetarisch
                        </Text>
                        <View>
                            <FlatList
                                data={vegetarianRecipes}
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
                        </View>
                        <Text
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Fleischhaltig
                        </Text>
                        <View>
                            <FlatList
                                data={meatRecipes}
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
                        </View>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <View>
                        </View>
                    )
                }}>

            </FlatList>
            <FooterMenu onPressHome={onPressHandlerHome}
                onPressFavoriten={onPressHandlerFavoriten}
                onPressEntdecken={onPressHandlerEntdecken}
                onPressHinzufuegen={onPressHandlerHinzufuegen}
                onPressUser={onPressHandlerUser}>

                </FooterMenu>
        </SafeAreaView>
    );
}