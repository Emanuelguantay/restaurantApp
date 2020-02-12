import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements'

const changeAvatar = ()=>{
    console.log('Estas cambiando el avatar');
}

const InfoUser = (prop:any) => {
    //TO DO: Mejorar
    const{userInfo:{uid, displayName,email,photoURL}} = prop;
    console.log(photoURL)
    // const {userInfo} =prop;
    // console.log('USER INFO:',userInfo);
    return (
        <View style={styles.viewUserInfo}>
            <Avatar 
                rounded
                size='large'
                showEditButton
                onEditPress={changeAvatar}
                containerStyle={styles.userInfoAvatar}
                source={{
                    uri: photoURL? photoURL: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                }}
            />

            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : 'Anónimo'}
                </Text>
                <Text>
                    {email? email : ''}
                </Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    viewUserInfo:{
        // alignContent: 'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        paddingVertical:20,
    },
    userInfoAvatar:{
        marginRight:20,
    },
    displayName:{
        fontWeight:'bold'
    }
});

export default InfoUser;