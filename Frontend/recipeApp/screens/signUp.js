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
import { signup } from "../api";
import { useNavigation } from '@react-navigation/native';



export default function SignUp() {

    const [userName, setuserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const navigation = useNavigation();

    function onClickSignUp(userName, email, password, name, lastName){
        signup(userName, email, password, name, lastName)
            .then(loggedInUser => {
                console.log("Message:", loggedInUser);
                if(typeof loggedInUser === "string"){
                  alert(loggedInUser);
                }else{
                  alert('Registrierung ist erfolgreich abgeschlossen');
                  navigation.navigate('login_screen');
                }
              })
    }

    const onPressHandler = () => {
        onClickSignUp(userName, email, password, name, lastName);
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/signup.jpg")}>
                <Text style={styles.title}>COOKIPEDIA</Text>


                <StatusBar style="auto" />
                <View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="E-Mail"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
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
                            placeholder="Benutzername"
                            placeholderTextColor="#003f5c"
                            onChangeText={(userName) => setuserName(userName)}
                        />

                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Vorname"
                            placeholderTextColor="#003f5c"
                            onChangeText={(name) => setName(name)}
                        />

                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Nachname"
                            placeholderTextColor="#003f5c"
                            onChangeText={(lastName) => setLastName(lastName)}
                        />

                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('login_screen')}  >
                    <Text style={styles.forgot_button}>Bereits registriert? Jetzt anmelden!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={onPressHandler}>
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
        marginTop: 20


    }
});