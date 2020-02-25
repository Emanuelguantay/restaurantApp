import React, { useRef,useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/loading';
import AddRestaurantForm from '../../components/restaurants/addRestaurantForm';

const AddRestaurant = (prop:any) =>{
    const {navigation} = prop;
    const [isLoading,setIsLoading] = useState(false);
    const toastRef = useRef();

    return(
        <View style={styles.viewContent}>
            <Text>Agregar imagen</Text>
            <AddRestaurantForm 
                toastRef={toastRef} 
                setIsLoading={setIsLoading} 
                navigation={navigation}
                style={styles.addRestaurantFormStyle}
            />
            
            <Toast 
                ref={toastRef} 
                position='center' 
                opacity={0.5}
            />
            <Loading
                isVisible={isLoading}
                text = "Creando restaurante"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContent:{
        //flex:1,
        paddingHorizontal: 10,
    },
    addRestaurantFormStyle:{

    }
});

export default AddRestaurant;