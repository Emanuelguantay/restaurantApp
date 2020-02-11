import {createStackNavigator} from 'react-navigation-stack';
import RestaurantScreen from '../screen/restaurant';

const RestaurantScreenStacks = createStackNavigator({
    Restaurants:{
        screen: RestaurantScreen,
        navigationOptions : () =>({
            title: 'Restaurantes'
        })
    }
});

export default RestaurantScreenStacks;