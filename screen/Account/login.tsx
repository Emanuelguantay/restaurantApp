import React,{useRef} from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import LoginForm from '../../components/account/loginForm';
import Toast from 'react-native-easy-toast';
import LoginFacebook from '../../components/account/loginFacebook';

const Login = (prop:any) => {

    const toastRef = useRef();
    const {navigation} = prop;
    // console.log(navigation);
    return (
        <ScrollView>
            <Image source={require('../../assets/img/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount navigation={navigation}/>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                {/* <Text>Facebook</Text> */}
                <LoginFacebook/>
            </View>
            <Toast 
                ref={toastRef}
                position='center'
                opacity={0.5}
            />
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
        marginHorizontal :40,
        marginVertical: 20,
    },
    //separar
    register:{
        marginTop: 15,
        marginHorizontal:10,
    },
    btnRegister:{
        color:"#00a680",
        fontWeight:"bold",
    },
});

export default Login;