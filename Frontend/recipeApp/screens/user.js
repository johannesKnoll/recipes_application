
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

import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../components/FooterMenu';
import { logout } from '../api';


export function User() {

    const navigation = useNavigation();
    const onPressHandlerHome = () => {
        console.log(navigation)
        navigation.navigate('home');
    }
    const onPressHandlerFavoriten = () => {
        console.log(navigation)
        navigation.navigate('favoriten');
    }
    const onPressHandlerEntdecken = () => {
        console.log(navigation)
        navigation.navigate('entdecken');
    }
    const onPressHandlerHinzufuegen = () => {
        console.log(navigation)
        navigation.navigate('hinzufuegen');
    }
    const onPressHandlerUser = () => {
        console.log(navigation)
        navigation.navigate('user');
    }
    const handelrChangeEmail = () => {
        console.log(navigation)
        navigation.navigate('changeEmail');
    }
    const handelrChangePassword = () => {
        console.log(navigation)
        navigation.navigate('changePassword');
    }
    const handelrChangeUsername = () => {
        console.log(navigation)
        navigation.navigate('changeUsername');
    }

    const logoutHandler = () => {
        alert("Erfolgreich ausgeloggt");
        logout();
        navigation.navigate('login_screen');
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../pictures/picture4.jpg")}>
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangeEmail}>
                    <Text>E-Mail ändern</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangePassword} >
                    <Text >Passwort ändern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangeUsername} >
                    <Text >Benutzername ändern</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutBtn} onPress={logoutHandler}>
                    <Text style={styles.fontLogout} ><b>Ausloggen</b></Text>
                </TouchableOpacity>
            </ImageBackground>
            <FooterMenu onPressHome={onPressHandlerHome}
                onPressFavoriten={onPressHandlerFavoriten}
                onPressEntdecken={onPressHandlerEntdecken}
                onPressHinzufuegen={onPressHandlerHinzufuegen}
                onPressUser={onPressHandlerUser}></FooterMenu>
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
    logoutBtn: {
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

    }, changePasswordEmail: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "#FFFFFF",
        opacity: 0.7,
        margin: "auto",

    },
    backgroundImage: {
        width: "100%",
        hight: "100%",
        flex: 1,
        justifyContent: "center"
    },
    font: {
        fontSize: 16,
    },
    fontLogout: {
        fontSize: 20,
        color: "black"
    }
});


