import * as React from 'react';

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


export function ChangeUsername() {



    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/settings.jpg")}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="neuer Benutzername"
                        placeholderTextColor="#003f5c"

                    />
                </View>


                <View style={styles.inputView}>

                    <TouchableOpacity style={styles.changeUsername} >
                        <Text style={styles.font}><b>ändere den Nutzernamen</b></Text>
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
        marginLeft: 20,

        alignItems: "center",
        opacity: "0.4",

    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 40,
        fontWeight: "bold",
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