
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

    export function Overview() {
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
        setSearch({ search });
      };

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Overview!</Text>
        // </View>

        <SafeAreaView
            style={{flex: 1, backgroundColor: "white"}}>
        <View
            style={{
                    margin: 15
                }}
        >
            <SearchBar
                    placeholder="Type Here..."
                    backgroundColor="lightgrey"
                    onChangeText={updateSearch}
                    value={search}
            />
            </View>

            <FlatList
                data={testData}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                //showVerticalScrollIndicator={true}
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
                            data={testData}
                            horizontal                        
                            showsHorizontalScrollIndicator={false}
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