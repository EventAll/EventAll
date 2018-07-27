import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SettingsScreen from '../Settings/components/Settings';
import EventPageContainer from '../EventPage/screens/EventPageContainer';

import LoginScreen from '../Login/components/Login';
import SignupScreen from '../Signup/components/Signup';

const HomeNavigator = createBottomTabNavigator(
  {
    Event: { screen: EventPageContainer },
    Settings: { screen: SettingsScreen },
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
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootNavigator;
