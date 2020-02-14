import React, { useState } from 'react';
import { StyleSheet, View,  Text } from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as fireBase from 'firebase';

const ChangeDisplayNameForm = (prop:any)=>{

    //propr
    const {displayName, setIsVisibleModal, setReloadData, toastRef} = prop;
    const[newDisplayName, setNewDisplayName] = useState();
    const[error,setError] = useState();
    const[isLoading, setIsLoading] = useState(false);

    const updateDisplayName = ()=>{
        console.log('Nombre de usuario actualizado');
        setError(null);
        if(!newDisplayName){
            setError('El nombre de usuario no ha cambiado');
        }else{
            setIsLoading(true);
            const update ={
                displayName: newDisplayName
            }
            fireBase
            .auth()
            .currentUser?.updateProfile(update).then(()=>{
                setIsLoading(false);
                setReloadData(true);
                toastRef.current.show('Nombre actualizado correctamente');
                setIsVisibleModal(false);
            })
            .catch(()=>{
                setError('Error al actualizar el nombre');
                setIsLoading(false);
            })
        }
    }

    return(
        <View style={styles.view}>
            
            <Input
                placeholder ="Nombre"
                containerStyle = {styles.input}
                defaultValue ={displayName && displayName}
                onChange = {e=> setNewDisplayName(e.nativeEvent.text)}
                //onChangeText = { e => setNewDisplayName(e)}
                
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2"
                }}
                errorMessage ={error}
            />

            <Button 
                title ="Cambiar nombre"
                containerStyle = {styles.btnContainer}
                buttonStyle = {styles.btn}
                onPress = {updateDisplayName}
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
    },
    btnContainer : {
        marginTop: 20,
        width: '100%',
    },
    btn : {
        backgroundColor : "#00a680",
    }
});

export default ChangeDisplayNameForm;