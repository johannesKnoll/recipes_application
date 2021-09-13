
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
                            <View>
                                <Text>{item.id}</Text>
                            </View>
                        )
                    }}>

                </FlatList>

        </SafeAreaView>
    );
}