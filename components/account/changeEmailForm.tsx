import React,{useState} from 'react';
import { StyleSheet, View,  Text } from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as fireBase from 'firebase';
import {reauthenticate} from '../../utils/api';

//TO DO : Cambiar para no permitir cambio de correo
const ChangeEmailForm = (prop:any)=>{
    const {email, setIsVisibleModal, setReloadData, toastRef} = prop;
    
    const[newEmail, setNewEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error,setError] = useState();
    const[isLoading, setIsLoading] = useState(false);
    const[hidePassword, setHidePassword] = useState(true);

    const updateEmail = ()=>{
        setError({});
        if(!newEmail || email === newEmail){
            setError({email : "Email no puede ser igual o ser vacio"})
        } else{
            setIsLoading(true);
            reauthenticate(password)?.then(()=>{
                fireBase.auth().currentUser?.updateEmail((newEmail)).then(()=>{
                    setIsLoading(false);
                    setReloadData(true);
                    toastRef.current.show("Email actualizado correctamente");
                    setIsVisibleModal(false);
                }).catch(()=>{
                    setError({email: "Error al actualizar email"});
                    setIsLoading(false);
                })

            }).catch(()=>{
                setError({password: "La contraseña no es correcta"});
                setIsLoading(false);
            })
        }
        console.log('Email update')
    }

    return(
        <View style={styles.view}>
            
            <Input
                placeholder ="Correo electronico"
                containerStyle = {styles.input}
                defaultValue ={email && email}
                onChange = {e=> setNewEmail(e.nativeEvent.text)}
                //onChangeText = { e => setNewDisplayName(e)}
                rightIcon={{
                    type: "material-community",
                    name: "at",
                    color: "#c2c2c2"
                }}
                errorMessage ={error.email}
            />

            <Input
                placeholder ="Contraseña"
                containerStyle = {styles.input}
                secureTextEntry ={hidePassword}
                onChange = {e => setPassword(e.nativeEvent.text)}
                rightIcon={{
                    type: "material-community",
                    name: hidePassword? "eye-outline":"eye-off-outline",
                    color: "#c2c2c2",
                    onPress: () => {setHidePassword(!hidePassword)}
                }}
                errorMessage = {error.password}
            />

            <Button 
                title ="Cambiar email"
                containerStyle = {styles.btnContainer}
                buttonStyle = {styles.btn}
                onPress = {updateEmail}
                loading = {isLoading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        alignItems:'center',
        paddingVertical:10,
       
    },
    input:{
        marginBottom: 10,
        //padding: 40,
    },
    btnContainer : {
        marginTop: 20,
        width: '95%',
        
    },
    btn : {
        backgroundColor : "#00a680",
    }
});

export default ChangeEmailForm;