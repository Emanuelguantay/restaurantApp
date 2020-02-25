import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as firebase from 'firebase';

const Restaurant = (prop:any) =>{
    const{navigation} = prop;

    const [user, setUser] = useState();

    useEffect(()=>{
        console.log('entro a useEffect');
        firebase.auth().onAuthStateChanged(userInfo => {
            setUser(userInfo);
        });
    },[])


    return(
        <View style={styles.viewBody}>
            <Text>Restaurantes</Text>
            {user && <AddRestaurantButton navigation={navigation}/> }
            
        </View>
    );
}

const AddRestaurantButton = (prop:any) =>{
    const{navigation} = prop;
    return(
        <ActionButton
            buttonColor="#00a680"
            onPress = {()=>navigation.navigate("AddRestaurant")}
        />
    );
}

const styles= StyleSheet.create({
    viewBody:{
        flex:1,
    }
});
export default Restaurant ;