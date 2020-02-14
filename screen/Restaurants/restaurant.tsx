import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';

const Restaurant = (prop:any) =>{
    const{navigation} = prop;
    return(
        <View style={styles.viewBody}>
            <Text>Restaurantes</Text>
            <AddRestaurantButton navigation={navigation}/>
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