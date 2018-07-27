import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SettingsScreen from '../Settings/screens/SettingsScreen';
import EventPageScreen from '../EventPage/screens/EventPageScreen';
import HomeScreen from '../Home/screens/HomeScreen';

import LoginScreen from '../Login/screens/LoginScreen';
import SignupScreen from '../Signup/screens/SignupScreen';

const HomeNavigator = createBottomTabNavigator(
  {
    Event: { screen: EventPageScreen },
    Settings: { screen: SettingsScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Event',
  }
);

const RootNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: HomeNavigator },
  },
  {
    navigationOptions: {
      headerLeft: null,
    },
    initialRouteName: 'Home',
  }
);

export default RootNavigator;
