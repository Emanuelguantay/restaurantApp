import {createStackNavigator} from 'react-navigation-stack';
import MyAccountScreen from '../screen/Account/myAccount';
import LoginScreen from '../screen/Account/login';
import RegisterScreen from '../screen/Account/register';

const AccountScreenStacks = createStackNavigator({
    MyAccount:{
        screen: MyAccountScreen,
        navigationOptions : () =>({
            title: 'Mi cuenta'
        })
    },
    Login :{
        screen:LoginScreen,
        navigationOptions: () =>({
            title: 'Login'
        })
    },
    Register:{
        screen:RegisterScreen,
        navigationOptions:()=>({
            title:'Registro cuenta'
        })
    }
});

export default AccountScreenStacks;