import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as fireBase from 'firebase';
import {reauthenticate} from '../../utils/api';

const ChangePasswordForm = (prop: any) => {
    const {setIsVisibleModal, setReloadData, toastRef } = prop;
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepead] = useState('');
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [hideNewPassword, setHideNewPassword] = useState(true);
    const [hideNewPasswordRepeat, setHideNewPasswordRepeat] = useState(true);

    const updatePassword = ()=>{
        console.log('cambio de cntraseña');
        console.log('password', password);
        console.log('newPassword',newPassword);
        console.log('newPasswordRepeat',newPasswordRepeat);
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
                errorMessage={error}
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
                errorMessage={error}
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
                errorMessage={error}
            />
            <Button
                title="Cambiar contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={updatePassword}
                loading={isLoading}
            />
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