import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import colors from '../globals/colors';
import SettingsScreen from '../Settings/screens/SettingsScreen';
import EventPageScreen from '../EventPage/screens/EventPageScreen';
import HomeScreen from '../Home/screens/HomeScreen';
import ScheduleContainer from '../Schedule/screens/ScheduleContainer';

import LoginScreen from '../Login/screens/LoginScreen';
import SignupScreen from '../Signup/screens/SignupScreen';

const EventNavigator = createBottomTabNavigator(
  {
    Schedule: { screen: ScheduleContainer },
    Event: { screen: EventPageScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Event',
    navigationOptions: ({ navigation }) => {
      const tabBarIcon = ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }
        else if (routeName === 'Event') {
          iconName = 'md-calendar';
        }
        else if (routeName === 'Schedule') {
          iconName = 'ios-compass-outline';
        }
        return (
          <Ionicons
            name={iconName}
            size={35}
            color={focused ? colors.userOrange : tintColor}
          />
        );
      };
      tabBarIcon.propTypes = {
        focused: PropTypes.bool.isRequired,
        tintColor: PropTypes.string.isRequired,
      };
      // This code below is necessary for rendering the icons at the bottom of the tab
      return {
        tabBarIcon,
      };
    },
  }
);

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
