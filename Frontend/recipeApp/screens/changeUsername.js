import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,

} from "react-native";
import { setUsername, login } from '../api';

export function ChangeUsername() {
    const [text, setText] = React.useState('');
    const changeUsernameHandler = () => {

        setUsername(text)
            .then(response => {
                console.log(response)
                alert(response.message)
            })
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/settings.jpg")}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Neuer Benutzername"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setText(text)}

                    />


                    <TouchableOpacity style={styles.changeUsername} onPress={changeUsernameHandler} >
                        <Text style={styles.font}><b>Benutzername ändern</b></Text>
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        </View>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

        alignItems: "center",
        justifyContent: "center",
    },


    backgroundImage: {
        width: "100%",
        hight: "100%",
        flex: 1,
        justifyContent: "center"
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 10,
        marginLeft: 40,

        alignItems: "center",
        opacity: "0.4",

    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 40,
        fontWeight: "bold",
        alignItems: "center",
        margin: "auto",


    },
    changeUsername: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "#FF0000",
        opacity: "0.8",
        margin: "auto",

    },
    font: {
        fontSize: 16,
    }
});