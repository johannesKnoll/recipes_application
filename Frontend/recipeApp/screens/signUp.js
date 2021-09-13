import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { login } from "../api";



export default function SignUp() {

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    function onClickSignin(userName, password) {
        login(userName, password)
            .then(loggedInUser => {
                console.log(loggedInUser);
            })
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/signup.jpg")}>



                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="E-Mail"
                        placeholderTextColor="#003f5c"
                        onChangeText={(userName) => setuserName(userName)}
                    />

                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Passwort"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />

                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Natzername"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(userName) => setuserName(userName)}
                    />

                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(name) => setName(name)}
                    />

                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Nachname"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(lastName) => setLastName(lastName)}
                    />

                </View>

                <TouchableOpacity style={styles.loginBtn} onClick={onClickSignin(userName, password)}>
                    <Text style={styles.loginText}>Registrieren</Text>
                </TouchableOpacity>
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
        marginTop: 20,
        marginBottom: 1,
        margin: "auto",
        alignItems: "center",
        opacity: "0.5",

    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 40,
        fontWeight: "bold",
        margin: "auto",

    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        marginBottom: 30,
        backgroundColor: "#FFFFFF",
        opacity: "0.6",
        margin: "auto",
    },
    loginText: {
        color: "#000000",
        opacity: "1",
        fontWeight: "bold",
    },
});