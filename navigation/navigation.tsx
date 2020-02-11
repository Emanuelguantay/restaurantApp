import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements'
import RestaurantScreenStacks from './restaurantStack';
import TopListScreenStack from './topListStack';
import SearchScreenStack from './searchStack';
import AccountScreenStack from './accountStack';
//import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationStack = createBottomTabNavigator({
    Restaurants:{
        screen: RestaurantScreenStacks,
        navigationOptions:() =>({
            tabBarLabel:"Restaurantes",
            tabBarIcon: ({tintColor})=>(
                <Icon
                    type="material-community"
                    name="compass-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    TopList:{
        screen: TopListScreenStack,
        navigationOptions:()=>({
            tabBarLabel:"Ranking",
            tabBarIcon: ({tintColor})=>(
                <Icon
                    type='material-community'
                    name='star'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Search:{
        screen: SearchScreenStack,
        navigationOptions:()=>({
            tabBarLabel:"Buscar",
            tabBarIcon: ({tintColor})=>(
                <Icon
                    type="material-community"
                    name="magnify"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Account:{
        screen: AccountScreenStack,
        navigationOptions:()=>({
            tabBarLabel:"Cuenta",
            tabBarIcon: ({tintColor})=>(
                <Icon
                    type="material-community"
                    name="home-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },

},
{
    initialRouteName: "Restaurants",
    order: ["Restaurants", "TopList","Search","Account"],
    tabBarOptions: {
        inactiveTintColor:"#646464",
        activeTintColor:"#00a680"
    }
}

);
//TODO: Corregir Iconos
export default createAppContainer(NavigationStack);