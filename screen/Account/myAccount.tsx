import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as fireBase from 'firebase';
import Loading from '../../components/loading';
import UserLogged from './userLogged';
import UserGuest from './userGuest';


const MyAccount = () =>{
    const [login,setLogin] = useState(false);
    
    console.log('current user: ',fireBase.auth().currentUser);

    useEffect(()=>{
        
        fireBase.auth().onAuthStateChanged(user =>{
            !user ? setLogin(false):setLogin(true);
            console.log('login',login);
            //TOKEN
            //console.log('current user em login: ',fireBase.auth().currentUser);
        })
    });
    //Probar
    // return(
    //     <Loading text='Cargando...' isVisible={true}></Loading>
    //     );

    if (login===null){
        return(
            <Loading text='Cargando...' isVisible={true}></Loading>
            );
    }
    return login ? <UserLogged/>:<UserGuest/>

    // if(login){
    //     return(<View>
    //         <Text>Uusario logeado</Text>
    //     </View>);
    // }else{
    //     return(<View>
    //         <Text>Usuario no logeado</Text>
    //     </View>);
    // }


    
    // return(
    //     <View>
    //         <Text>Mi cuenta</Text>
    //     </View>
    // );
}

export default MyAccount ;