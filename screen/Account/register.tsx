import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-elements';
import RegisterForm from '../../components/account/registerForm';

const Register = () => {
    
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require('../../assets/img/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View style={styles.viewForm}>
                <RegisterForm/>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles= StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20,
    },
    viewForm:{
        marginHorizontal: 40,

    },
    color:{
        backgroundColor:'yellow'
    }
});

export default Register;