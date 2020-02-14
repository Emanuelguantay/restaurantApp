import {createStackNavigator} from 'react-navigation-stack';
import RestaurantScreen from '../screen/Restaurants/restaurant';
import AddRestaurantScreen from '../screen/Restaurants/addRestaurant';

const RestaurantScreenStacks = createStackNavigator({
    Restaurants:{
        screen: RestaurantScreen,
        navigationOptions : () =>({
            title: 'Restaurantes'
        })
    },
    AddRestaurant:{
        screen: AddRestaurantScreen,
        navigationOptions : () =>({
            title: 'Nuevo Restaurante'
        })
    },
});

export default RestaurantScreenStacks;