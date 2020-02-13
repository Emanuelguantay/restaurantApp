import React, { useState, useEffect, useRef } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/account/infoUser';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/loading';
import AccountOptions from '../../components/account/accountOptions';

const UserLogged = () => {
    const [userInfo, setUserInfo] = useState();
    const [reloadData, setReloadData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [textLoading, setTextLoading] = useState('');

    const toastRef = useRef();

    useEffect(() => {
        (async () => {
            //usuario logueado recientemente
            const user = await firebase.auth().currentUser;
            setUserInfo(user?.providerData[0]);
            // console.log('usser usuario logeado:', user? user: '');
            // console.log('usser providerData:', user? user.providerData[0] : '');
        })();
        setReloadData(false);
    }, [reloadData]) //[cuando cambien se ejecuta useEffect]

    return (
        <View style={styles.viewUserInfo}>
            {userInfo &&
                <View>
                    <InfoUser 
                        userInfo={userInfo} 
                        setReloadData={setReloadData} 
                        toastRef={toastRef}
                        setIsLoading={setIsLoading}
                        setTextLoading={setTextLoading}
                    />
                    <AccountOptions
                    />
                </View>
            }
            <Button
                title="Cerrar Sesión"
                onPress={() => { firebase.auth().signOut() }}
                titleStyle ={styles.btnCloseSessionText}
                buttonStyle={styles.btnCloseSession}
            />

            <Toast
                ref={toastRef}
                position='center'
                opacity={0.5}
            />
            <Loading
                text={textLoading}
                isVisible={isLoading}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    viewUserInfo:{
        minHeight :'100%',
        backgroundColor: '#f2f2f2',
    },
    btnCloseSession:{
        marginTop: 30,
        borderRadius: 0,
        backgroundColor:'#fff',
        borderTopWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        paddingVertical: 10,
    },
    btnCloseSessionText:{
        color:'#00a680'
    }
});

export default UserLogged;