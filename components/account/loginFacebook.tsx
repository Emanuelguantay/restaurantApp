import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements'

//TO DO: Hacer logica con facebook
const Login = () =>{
    console.log('Iniciando sesión con Facebook');
}

const LoginFacebook = () => {
    return (
        <SocialIcon
            title='Iniciar sesión con Facebook'
            button
            type='facebook'
            onPress={Login}
            onLongPress={()=>{console.log('Btn Facebook presionado largamente....')}}
        />
    );
}

export default LoginFacebook;