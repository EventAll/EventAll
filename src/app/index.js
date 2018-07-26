import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TimelineScreen from '../Timeline/components/Timeline';
import SettingsScreen from '../Settings/components/Settings';
import EventPageContainer from '../EventPage/screens/EventPageContainer';

import LoginScreen from '../Login/components/Login';
import SignupScreen from '../Signup/components/Signup';

const RootNavigator = createBottomTabNavigator({
  Timeline: { screen: TimelineScreen },
  Event: { screen: EventPageContainer },
  Settings: { screen: SettingsScreen },
},
{
  initialRouteName: 'Event',
});

const LoginNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Root: { screen: RootNavigator },
},
{
  navigationOptions: {
    headerLeft: null,
  },
},
{
  initialRouteName: 'Login',
});

export default LoginNavigator;
