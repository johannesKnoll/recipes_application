
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

export function Favoriten() {
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
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Favoriten
                        </Text>
                        <FlatList
                            data={testData}
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
                            Eigene Rezepte
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