import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button, Input, Icon, registerCustomIconType } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {validateEmail} from '../../utils/validation';
import * as fireBase from 'firebase';
import Loading from '../loading';
import {withNavigation} from 'react-navigation';

const RegisterForm = (prop:any) => {
    const{toastRef,navigation}=prop;

    const[hidePassword,setHidePassword] = useState(true);
    const[hideRepeatPassword,setHideRepeatPassword] = useState(true);

    const[email, setEmail]= useState("");
    const[password, setPassword]=useState("");
    const[repeatPassword, setRepeatPassword]=useState("");

    const[isVisibleLoading, setIsVisibleLoading]=useState(false);

    const register =async ()=>{
        setIsVisibleLoading(true);
        // console.log('Usuario registrado');
        // console.log('Email: ',email);
        // console.log('Password: ',password);
        // console.log('Repeat password: ',repeatPassword);

        // const resultValidationEmail = validateEmail(email);
        // console.log('Result Validation:', resultValidationEmail);
        if(!email || !password || !repeatPassword){
            //console.log('Todos los campos son obligatorios');
            toastRef.current.show('Todos los campos son obligatorios');
            
        }else{
            if(!validateEmail(email)){
                //console.log('Email Incorrecto');
                toastRef.current.show('Email Incorrecto');
            }else{
                if(password !== repeatPassword ){
                    //console.log('Las contraseñas no son iguales');
                    toastRef.current.show('Las contraseñas no son iguales');
                }else{
                    //console.log('Registro correcto...');
                    await fireBase
                    .auth().createUserWithEmailAndPassword(email,password)
                    .then(()=>{
                        
                        //console.log('usuario creado correctamente');
                        toastRef.current.show('usuario creado correctamente');
                        navigation.navigate("MyAccount");
                    })
                    .catch(()=>{
                        //console.log('Error al crear la cuenta, intentalo más tarde');
                        toastRef.current.show('Error al crear la cuenta, intentalo más tarde');
                    });
                }
            }
        }
        setIsVisibleLoading(false);
    }

    return (
        <View
            style={styles.formContainer}
        >
            <Input
                placeholder="Correo Electronico"
                containerStyle={styles.inputForm}
                //onChange={e => setEmail(e.nativeEvent.text)}
                onChangeText={(em) => {setEmail(em)}}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />

            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                secureTextEntry = {hidePassword}
                //onChange={e => setPassword(e.nativeEvent.text) }
                onChangeText={(em) => {setPassword(em)}}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hidePassword?"eye-outline":"eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress ={()=>{setHidePassword(!hidePassword)}}
                    />
                }
            />

            <Input
                placeholder="Repetir Contrasñea"
                containerStyle={styles.inputForm}
                secureTextEntry={hideRepeatPassword}
                //onChange={e => setRepeatPassword(e.nativeEvent.text) }
                onChangeText={(e) => {setRepeatPassword(e)}}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hideRepeatPassword?"eye-outline":"eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress ={()=>{setHideRepeatPassword(!hideRepeatPassword)}}
                    />
                }
            />

            <Button 
                title="Registrarse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle = {styles.btnRegister}
                onPress = {()=>register()}
            />
            <Loading text="Creando cuenta" isVisible={isVisibleLoading}/>
        </View>
    );

}


const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    iconRight: {
        color: "#c1c1c1",
    },
    btnContainerRegister: {
        marginTop: 40,
        width: '95%',
    },
    btnRegister: {
        backgroundColor:'#00a680',
    }
});

export default withNavigation(RegisterForm);