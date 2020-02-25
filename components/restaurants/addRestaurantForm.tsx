import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, Alert, Dimensions} from "react-native";
import {Icon, Avatar, Image, Input, Button} from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const AddRestaurantForm = (prop:any) => {
    const {toastRef, setIsLoading, navigation} = prop;
    const [imageSelected, setImageSelected] = useState([]);
    return(
        <ScrollView>
            <UploadImage 
                toastRef={toastRef} 
                imageSelected={imageSelected} 
                setImageSelected={setImageSelected}
            />
        </ScrollView>
    );
}

const UploadImage = (props:any)=>{
    const {imageSelected, setImageSelected, toastRef} = props;
    const imagenSelect = async () =>{
        const resultPermission = await check(PERMISSIONS.ANDROID.CAMERA);
        
        if (resultPermission === "denied") {
            toastRef.current.show("Es necesario aceptar los permisos de la camara, si lo has rechazado activalo manualmente en ajustes.",3000);
        } else {
            const options = {
                title: 'Seleciona Imagen',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            ImagePicker.showImagePicker(options, (response) => {

                if (response.didCancel) {
                    toastRef.current.show('Has cancelado el selector de imagen');
                } else if (response.error) {
                    toastRef.current.show('Error: ', response.error);
                } else {
                    setImageSelected([...imageSelected,response.uri])
                    const source = { uri: response.uri };
                    // uploadImage(source.uri, uid).then(() => {
                    //     updatePhotoUrl(uid);
                    // })
                    // //TO DO : mModificar catch
                    // .catch();
                }
            });
        }
    };
    
    const removeImage = (image:any) =>{
        const arrayImage = imageSelected;
        Alert.alert(
            "Eliminar Imagen",
            "¿Estas seguro que quieres eliminar la imagen?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: () => setImageSelected(arrayImage.filter((imagenUrl:any) => imagenUrl !==image))
                }
            ],
            {cancelable:false}
        );
    };

    return(
        <View style={styles.viewImage}>
            
            {//TO DO: Hacer responsive la lista, si pongo <5 se corta
            imageSelected.length < 4 && 
                <Icon
                    type="material-community"
                    name="camera"
                    color="#7a7a7a"
                    containerStyle={styles.containerIcon}
                    onPress={imagenSelect}
                />
            }
            
            {imageSelected.map((imageRestaurant:any) =>(
                <Avatar
                key={imageRestaurant}
                onPress ={()=> removeImage(imageRestaurant)}
                containerStyle = {styles.miniatureStyle}
                source={{ uri: imageRestaurant }}
            />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    viewImage:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 10,
    },
    containerIcon:{
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 70,
        backgroundColor: "#e3e3e3"
    },
    miniatureStyle :{
        marginHorizontal: 5,
        height: 70,
        width: 70,
        
    }
});

export default AddRestaurantForm;