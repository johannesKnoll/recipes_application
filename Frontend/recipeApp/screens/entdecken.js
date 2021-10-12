
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
import InformationRecipe from '../components/InformationRecipe';
import InformationRecipeTofu from '../components/InformationRecipeTofu';

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

    const[filteredVegan, setFilteredVegan] = React.useState([]);
    const[filteredVegetarian, setFilteredVegetarian] = React.useState([]);
    const[filteredMeat, setFilteredMeat] = React.useState([]);

    let veganArray = [];
    let vegetarianArray = [];
    let meatArray = [];

    const masterData = veganRecipes.concat(vegetarianRecipes.concat(meatRecipes));

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
                setFilteredVegan(recipesNew);
        })
            
        getVegetarianRecipes()
        .then(res => {
            const vegetarianRecipeNew = res;
            setVegetarianRecipes(vegetarianRecipeNew);
            setFilteredVegetarian(vegetarianRecipeNew);
            console.log(res, "Vegetarian Products");
        })
    
        getMeatRecipes()
        .then(res => {
            const meatRecipesNew = res;
            setMeatRecipes(meatRecipesNew);
            setFilteredMeat(meatRecipesNew);
        })
            
            console.log(veganRecipes, "Vegan recipes");
        },[isFocused]);

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");



    const updateSearch = (text) => {
      // setSearch(search);

      if(text){
          const newData = masterData.filter((item) => {
              const itemData = item.name ?
                            item.name.toUpperCase()
                            : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > 1;
          });

          newData.map(item => {
              if(item.vegan){
                  veganArray.push(item);
              }else if(item.vegetarian){
                  vegetarianArray.push(item);
              }else if(item.hasMeat){
                  meatArray.push(item);
              }
          })

          setFilteredVegan(veganArray);
          setFilteredVegetarian(vegetarianArray);
          setMeatRecipes(meatArray);

          //setFilteredData(newData);
          setSearch(text);
      } else{
          //setFilteredData(recipes);
          setFilteredVegan(veganRecipes);
          setFilteredVegetarian(vegetarianRecipes);
          setMeatRecipes(meatRecipes);
          setSearch(text);
      }
    }

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
                    onChangeText={(text) => updateSearch(text)}
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
                        {filteredVegan.length === 0 &&
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 30,
                                marginBottom: 10,
                                color: 'tomato'
                            }}>
                                Keine Daten verfügbar
                            </Text>
                        }
                        <View>
                            <FlatList
                                data={filteredVegan}
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
                            <InformationRecipe text="Tipp: Kokusmilch ist ein leckerer Sahne-Ersatz"/>
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
                        {filteredVegetarian.length === 0 &&
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 30,
                                marginBottom: 10,
                                color: 'tomato'
                            }}>
                                Keine Daten verfügbar
                            </Text>
                        }
                        <View>
                            <FlatList
                                data={filteredVegetarian}
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
                        <InformationRecipeTofu text="Auch Tofu kann lecker sein :)" />
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
                        {filteredMeat.length === 0 &&
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 30,
                                marginBottom: 10,
                                color: 'tomato'
                            }}>
                                Keine Daten verfügbar
                            </Text>
                        }
                        <View>
                            <FlatList
                                data={filteredMeat}
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