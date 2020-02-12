import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as fireBase from 'firebase';
import * as Permisions from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

//function para subir image a firebase
const uploadImage =async (uri:any, nameImage:string)=>{
    console.log('URI: ',uri);
    console.log('Nombre: ',nameImage);

    const response = await fetch(uri);
    const blob = await response.blob();
    console.log(blob);
    const ref = fireBase.storage().ref().child(`avatar/${nameImage}`);
    return ref.put(blob);
}

//Documentación
//check(PERMISSIONS.ANDROID.CAMERA)
//   .then(result => {
//     switch (result) {
//       case RESULTS.UNAVAILABLE:
//         console.log(
//           'This feature is not available (on this device / in this context)',
//         );
//         break;
//       case RESULTS.DENIED:
//         console.log(
//           'The permission has not been requested / is denied but requestable',
//         );
//         break;
//       case RESULTS.GRANTED:
//         console.log('The permission is granted');
//         break;
//       case RESULTS.BLOCKED:
//         console.log('The permission is denied and not requestable anymore');
//         break;
//     }
//   })
//   .catch(error => {
//     // …
//   });

const InfoUser = (prop:any) => {
    //TO DO: Mejorar
    const{userInfo:{uid, displayName,email,photoURL}} = prop;
    console.log(photoURL)
    // const {userInfo} =prop;
    // console.log('USER INFO:',userInfo);

    const changeAvatar = async () => {
        console.log('Estas cambiando el avatar');
        const resultPermission = await check(PERMISSIONS.ANDROID.CAMERA);
        console.log('PERMISSION', resultPermission);
    
        if (resultPermission === "denied") {
            console.log('Es necesario aceptar los permisos de la camara')
        } else {
            // console.log('ImagePicker');
            // const options = {};
            // const result = await ImagePicker.launchImageLibrary(options,response=>{
            //     console.log('response',response);
            // });
            const options = {
                title: 'Select Avatar',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            ImagePicker.showImagePicker(options, (response) => {
                console.log('Response = ', response);
    
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else {
                    const source = { uri: response.uri };
                    uploadImage(source.uri,uid).then(()=>{
                        console.log('Image subida correctamente');
                    });
    
                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
                    // this.setState({
                    //     avatarSource: source,
                    // });
                }
            });
        }
    }


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