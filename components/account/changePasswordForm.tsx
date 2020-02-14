import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';
import {reauthenticate} from '../../utils/api';

const ChangePasswordForm = (prop: any) => {
    const {setIsVisibleModal, setReloadData, toastRef } = prop;
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepead] = useState('');
    //TO DO: VER ({} as any)
    const [error, setError] = useState({} as any);
    const [isLoading, setIsLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [hideNewPassword, setHideNewPassword] = useState(true);
    const [hideNewPasswordRepeat, setHideNewPasswordRepeat] = useState(true);

    const updatePassword = ()=>{
        setError({});
        if(!password || !newPassword || !newPasswordRepeat){
            let objError : any = {} ;
            !password && (objError.password = "No puede estar vacío.");
            !newPassword && (objError.newPassword = "No puede estar vacío.");
            !newPasswordRepeat && (objError.newPasswordRepeat = "No puede estar vacío.");
            setError(objError)
        }else{
            if(newPassword !== newPasswordRepeat){
                let objError : any = {} ;
                (objError.newPassword = "Las nuevas contraseñas tienen que ser iguales");
                (objError.newPasswordRepeat = "Las nuevas contraseñas tienen que ser iguales");
                setError(objError);
            }else{
                setIsLoading(true);
                reauthenticate(password)?.then(()=>{
                    //si entra es correcto
                    firebase.auth().currentUser?.updatePassword(newPassword).then(()=>{
                        setIsLoading(false);
                        toastRef.current.show("Contraseña actualizada correctamente");
                        setIsVisibleModal(false);
                        //NOTA: Para deslogear
                        //firebase.auth().signOut();
                    })
                    .catch(()=>{
                        setError({ general: "Error al actualizar la contraseña" });
                        setIsLoading(false);
                    })
                })
                .catch(()=>{
                    setError({password:"La contraseña no es correcta"});
                    setIsLoading(false);
                });
            }

        }

    }

    return (
        <View style={styles.view}>
            <Input
                placeholder="Contraseña Actual"
                containerStyle={styles.input}
                secureTextEntry={hidePassword}
                onChange={e => setPassword(e.nativeEvent.text)}
                rightIcon={{
                    type: "material-community",
                    name: hidePassword ? "eye-outline" : "eye-off-outline",
                    color: "#c2c2c2",
                    onPress: () => { setHidePassword(!hidePassword) }
                }}
                errorMessage={error.password}
            />
            <Input
                placeholder="Nueva Contraseña"
                containerStyle={styles.input}
                secureTextEntry={hideNewPassword}
                onChange={e => setNewPassword(e.nativeEvent.text)}
                rightIcon={{
                    type: "material-community",
                    name: hideNewPassword ? "eye-outline" : "eye-off-outline",
                    color: "#c2c2c2",
                    onPress: () => { setHideNewPassword(!hideNewPassword) }
                }}
                errorMessage={error.newPassword}
            />

            <Input
                placeholder="Repetir Contraseña"
                containerStyle={styles.input}
                secureTextEntry={hideNewPasswordRepeat}
                onChange={e => setNewPasswordRepead(e.nativeEvent.text)}
                rightIcon={{
                    type: "material-community",
                    name: hideNewPasswordRepeat ? "eye-outline" : "eye-off-outline",
                    color: "#c2c2c2",
                    onPress: () => { setHideNewPasswordRepeat(!hideNewPasswordRepeat) }
                }}
                errorMessage={error.newPasswordRepeat}
            />
            <Button
                title="Cambiar contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={updatePassword}
                loading={isLoading}
            />
            {/* <Text>{error.general}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        paddingVertical: 10,
    },

    input: {
        marginBottom: 10,
    },

    btnContainer: {
        marginTop: 20,
        width: '95%',
    },

    btn: {
        backgroundColor: "#00a680",
    }
});

export default ChangePasswordForm;