
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


export function User() {

    const navigation = useNavigation();
    const onPressHandlerHome = () => {
<<<<<<< HEAD
        console.log(navigation)
        navigation.navigate('favoriten');
=======
      console.log(navigation)
          navigation.navigate('home');
>>>>>>> 498065c97a319f287a7632949a99a0bd98827922
    }
    const onPressHandlerFavoriten = () => {
        console.log(navigation)
        navigation.navigate('favoriten');
    }
    const onPressHandlerEntdecken = () => {
<<<<<<< HEAD
        console.log(navigation)
        navigation.navigate('favoriten');
    }
    const onPressHandlerHinzufuegen = () => {
        console.log(navigation)
        navigation.navigate('favoriten');
    }
    const onPressHandlerUser = () => {
        console.log(navigation)
        navigation.navigate('favoriten');
    }
    const handelrChangePassword = () => {
        navigation.navigate('changePassword');
    }
    const handelrChangeUsername = () => {
        navigation.navigate('changeUsername');
    }
    const handelrChangeEmail = () => {
        navigation.navigate('changeEmail');
=======
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
>>>>>>> 498065c97a319f287a7632949a99a0bd98827922
    }


    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={require("../assets/settings.jpg")}>
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangeEmail}>
                    <Text>E-Mail ändern</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangePassword} >
                    <Text >Passwort ändern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.changePasswordEmail} onPress={handelrChangeUsername} >
                    <Text >User Name ändern</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutBtn} >
                    <Text style={styles.font} ><b>Logout</b></Text>
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
        opacity: "0.4",
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
        opacity: "0.4",
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
    }
});


