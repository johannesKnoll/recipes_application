
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
import { getFavoriteRecipes, getAllRecipesFromUser } from '../api';
import FooterMenu from '../components/FooterMenu';
import { useNavigation } from '@react-navigation/native';
import { logAPI } from '../api';


export function Favoriten() {

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
      const onPressHandler = () => {
        console.log(navigation)
            navigation.navigate('recipe-overview');
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

    const [search, setSearch] = React.useState("");
    const [favoriteRecipes, setFavoriteRecipes] = React.useState([]);
    const [userRecipes, setUserRecipes] = React.useState([]);

    React.useEffect(() => {
        logAPI();
        getFavoriteRecipes()
            .then(res => {
                const favoriteRecipesNew = res;
                setFavoriteRecipes(favoriteRecipesNew);
            })

        getAllRecipesFromUser()
            .then(res => {
                const userRecipesNew = res;
                console.log("User recipes", res);
                setUserRecipes(userRecipesNew);
            })
    },[]);

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
                                marginTop: 20,
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Favoriten
                        </Text>
                        <View>
                            <FlatList
                                data={favoriteRecipes}
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
                            Eigene Rezepte
                        </Text>
                        <View>
                            <FlatList
                                data={userRecipes}
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
                onPressUser={onPressHandlerUser}></FooterMenu>
        </SafeAreaView>
    );
}