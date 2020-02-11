import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation'

const Login = (prop:any) => {
    const {navigation} = prop;
    // console.log(navigation);
    return (
        <ScrollView>
            <Image source={require('../../assets/img/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewContainer}>
                <Text>Login</Text>
                {/* <Text>Crear cuenta</Text> */}
                <CreateAccount navigation={navigation}/>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Facebook</Text>
            </View>
        </ScrollView>
    );
}

//separar componente
function CreateAccount(prop:any){
    const{navigation} = prop;
    // console.log('estamos en create account',navigation);
    return(
        <Text style={styles.register}>
            ¿Aún no tienes una cuenta?{" "}
            <Text 
                style={styles.btnRegister}
                onPress={()=>{navigation.navigate("Register")}}
            >
                Registrate.
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20,
    },
    viewContainer: {
        marginHorizontal: 40,
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    },
    //separar
    register:{
        marginTop: 15,
        marginHorizontal:10,
    },
    btnRegister:{
        color:"#00a680",
        fontWeight:"bold",

    }
});

export default Login;