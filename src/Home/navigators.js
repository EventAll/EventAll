import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

/**
 * Creates the stack navigator to connect home and profile pages
 */
const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default HomeNavigator;
