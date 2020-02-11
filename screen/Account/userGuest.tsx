import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

const UserGuest = (props:any)=>{
    //console.log('Props', props);
    const {navigation} = props;
    return(
        <ScrollView style={styles.viewBody} centerContent={true} >
            <Image source={require('../../assets/img/user-guest.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.description}>
                Consulta tu perfil
            </Text>

            <Text style={styles.title}>
                ¿Como describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla. Comenta tu experiencia!
            </Text>
            <View style={styles.viewBtn}>
                <Button 
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Ver perfil"
                    onPress={()=>navigation.navigate("Login")}
                />
            </View>
        </ScrollView>
        // <View>
        //     <Text>UserGuest</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        paddingHorizontal:30,

    },
    image:{
        height:300,
        width:"100%",
        marginBottom:40,
    },
    title:{
        fontWeight:'bold',
        fontSize:19,
        marginBottom:10,
        textAlign:'center'
    },
    description:{
        textAlign: 'center',
        marginBottom:20,
    },
    viewBtn:{
        flex:1,
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor:'#00a680',
        marginBottom:30,
    },
    btnContainer:{
        
        width:"70%",
    }
});

export default withNavigation (UserGuest);