import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import {validateEmail} from '../../utils/validation';
import Loading from '../loading';
import * as fireBase from 'firebase';
import {withNavigation} from 'react-navigation';

const LoginRegister = (prop:any) =>{

    const{toastRef,navigation}=prop;
    // UseState
    const[hidePassword,setHidePassword] = useState(true);
    const[email, setEmail]= useState("");
    const[password, setPassword]=useState("");
    const[isVisibleLoading,setIsVisibleLoading]= useState(false);

    //Verifacion Login
    const login= async ()=>{
        console.log('Usuario Logeado');
        console.log('Email: ',email);
        console.log('Password: ',password);

        setIsVisibleLoading(true);
        
        if(!email || !password ){
            
            toastRef.current.show('Todos los campos son obligatorios');
            
        }else{
            if(!validateEmail(email)){
                toastRef.current.show('Email Incorrecto');
            }else{
                if(password.length < 6 ){
                    toastRef.current.show('Las contraseña debe tener mas de 6 caracteres');
                }else{
                    await fireBase
                    .auth().signInWithEmailAndPassword(email,password)
                    .then(()=>{
                        console.log('Login correcto');
                        navigation.navigate("MyAccount");
                    })
                    .catch(()=>{
                        toastRef.current.show('Email o contraseña incorrectas');
                    });
                }
            }
        }
        setIsVisibleLoading(false);
    }

    return(
        <View>
            <Input 
                placeholder="Correo Electronico"
                containerStyle = {styles.inputForm}
                onChangeText = {e=>{setEmail(e)}}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle ={styles.iconRight}
                    />
                }
            />
            <Input 
                placeholder="Contraseña"
                containerStyle = {styles.inputForm}
                secureTextEntry = {hidePassword}
                onChangeText = {e => {setPassword(e)}}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hidePassword? "eye-outline": "eye-off-outline"}
                        iconStyle ={styles.iconRight}
                        onPress ={()=>{setHidePassword(!hidePassword)}}
                    />
                }
            />
            <Button 
                title="Iniciar Sesion"
                containerStyle={styles.btnContainerLogin}
                buttonStyle = {styles.btnLogin}
                onPress = {()=>login()}
            />
            <Loading text="Iniciando Sesion" isVisible={isVisibleLoading}/>
        </View>
    );

}

const styles = StyleSheet.create({
    inputForm:{
        width : '100%',
        marginTop: 10,
    },
    iconRight:{
        color:'#c1c1c1'
    },
    btnContainerLogin: {
        marginTop: 40,
        width: '95%',
    },
    btnLogin: {
        backgroundColor:'#00a680',
    }
});

export default withNavigation(LoginRegister);