import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../screen/search';

const SearchScreenStacks = createStackNavigator({
    SearchScreen:{
        screen: SearchScreen,
        navigationOptions : () =>({
            title: 'Busca Restaurante'
        })
    }
});

export default SearchScreenStacks;