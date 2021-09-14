
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

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Overview!</Text>
        // </View>

        <SafeAreaView
            style={{flex: 1, backgroundColor: "white"}}>

                <FlatList
                    data={testData}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View></View>
                    }
                    renderItem={({ item }) => {
                        return(
                            <RecipeCard
                            recipe={item}
                            onPress={null}
                            >
                            </RecipeCard>
                        )
                    }}>

                </FlatList>

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

        </SafeAreaView>
    );
}