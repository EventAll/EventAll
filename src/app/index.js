import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../Home/screens/HomeScreen';

import LoginScreen from '../Login/screens/LoginScreen';
import SignupScreen from '../Signup/screens/SignupScreen';
import EventNavigator from '../Event/navigator';

const RootNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Event: { screen: EventNavigator },
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions: {
      // Placeholder until we get an asset
      headerBackTitle: 'BACK',
    },
    initialRouteName: 'Home',
  }
);

export default RootNavigator;
