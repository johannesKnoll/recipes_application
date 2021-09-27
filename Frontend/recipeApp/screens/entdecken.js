
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

export function Entdecken() {
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

    // state = {
    //     search: '',
    //   };
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
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
            <View
            style={{flex: 1, width: '100%'}}>
                
                    <View>
                        <Text
                            style={{
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Vegan
                        </Text>
                        <FlatList
                            contentContainerStyle={{flexGrow: 1, paddingBottom: 5}}
                            horizontal
                            data={testData}
                            keyExtractor={item => `${item.id}`}
                            keyboardDismissMode="on-drag"
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <RecentCard
                                        recipe={item}
                                        onPress={null}
                                    >
                                    </RecentCard>
                                )
                            }}
                            onEndReachedThreshold={0.5}>

                        </FlatList>
                    </View>
                    <View>
                        <Text
                            style={{
                                marginLeft: 20,
                                fontSize: 30,
                                fontWeight: "bold",
                                marginBottom: 10
                            }}
                        >
                            Vegatarisch
                        </Text>
                        <FlatList
                            contentContainerStyle={{flexGrow: 1, paddingBottom: 5}}
                            horizontal
                            data={testData}
                            keyExtractor={item => `${item.id}`}
                            keyboardDismissMode="on-drag"
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <RecentCard
                                        recipe={item}
                                        onPress={null}
                                    >
                                    </RecentCard>
                                )
                            }}
                            onEndReachedThreshold={0.5}>

                        </FlatList>
                    </View>
            </View>
        </SafeAreaView>
    );
}