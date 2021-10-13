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
import { setEmail, login } from '../api';


export function ChangeEmail() {
    const [text, setText] = React.useState('');
    const changeEmailHandler = () => {

        setEmail(text)
            .then(response => {
                console.log(response)
               alert("Ihre Email wurde erfolgreich geändert :)")
            })
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../pictures/picture4.jpg")}>


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Neue E-Mail Adresse"
                        placeholderTextColor="#003f5c"

                        onChangeText={text => setText(text)}

                    />



                    <TouchableOpacity style={styles.changeEmail} onPress={changeEmailHandler} >
                        <Text style={styles.font}><b>E-Mail Adresse ändern</b></Text>
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



        alignItems: "center",
        opacity: 0.7,



        margin: "auto",
        alignItems: "center",


    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 40,
        fontWeight: "bold",
        margin: "auto",

    },
    changeEmail: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "#FF0000",
        opacity: 0.7,
        margin: "auto",

    },
    font: {
        fontSize: 16,
    }
});