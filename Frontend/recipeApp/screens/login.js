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
import { Overview } from "./overview";
import SignUp from "./signUp";
//import { createStackNavigator } from 'react-navigation-stack';





export default function Login() {

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    function onClickSignin(userName, password) {
        login(userName, password)
            .then(loggedInUser => {
                console.log(loggedInUser);
            })
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/login.jpeg")}>
                <Text style={styles.title}>COOKIPEDIA</Text>
                <Image style={styles.image} source={require("../assets/logo.jpg")} />

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

                <TouchableOpacity>
                    <Text style={styles.forgot_}>Passwort vergessen?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}  >
                    <Text style={styles.forgot_button}>Noch kein Konto? Jetzt Registrieren</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('overview')} onClick={onClickSignin(userName, password)}>
                    <Text style={styles.loginText}>Einloggen</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

//const Navigator = createStackNavigator({
//  Login: { screen: login },
//SignUp: { screen: SignUp },

//});
//createAppContainer(Navigator);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        flex: 1,
        hight: "100px",
        width: "100px",
        margin: "auto",
        marginBottom: 50,
        marginTop: "12%",

        borderRadius: "50%",

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
        marginBottom: 20,
        margin: "auto",
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
    title: {

        color: "#FFFFFF",
        margin: "auto",
        fontWeight: "bold",
        fontSize: "40px",
        marginTop: "10%",

    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#FFFFFF",
        margin: "auto",


    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "#FFFFFF",
        opacity: "0.4",
        margin: "auto",
    },
    loginText: {
        color: "#000000",
        opacity: "1",
        fontWeight: "bold",
    },
});