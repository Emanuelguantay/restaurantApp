import {createStackNavigator} from 'react-navigation-stack';
import TopRestaurantScreen from '../screen/topRestaurant';

const TopListScreenStack = createStackNavigator({
    TopRestaurants:{
        screen: TopRestaurantScreen,
        navigationOptions : () =>({
            title: 'Ranking Restaurantes'
        })
    }
});

export default TopListScreenStack;