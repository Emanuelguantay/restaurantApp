import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/account/infoUser';

const UserLogged = ()=>{
    const[userInfo,setUserInfo] = useState();

    useEffect(()=>{
        (async ()=>{
            //usuario logueado recientemente
            const user = await firebase.auth().currentUser;
            setUserInfo(user? user.providerData[0]:' ');

            //console.log('usser:', user.providerData[0]);
        })();
    }, []) //[cuando cambien se ejecuta useEffect]

    return(
        <View>
            {userInfo && <InfoUser userInfo={userInfo}/>}
            <Button
                title="Cerrar Sesión"
                onPress={()=>{firebase.auth().signOut()}}
            />
        </View>
    );
}

export default UserLogged;