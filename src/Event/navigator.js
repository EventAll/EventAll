import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import colors from '../globals/colors';
import SettingsScreen from './screens/SettingsScreen';
import EventPageScreen from './screens/EventPageScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const EventNavigator = createBottomTabNavigator(
  {
    Schedule: { screen: ScheduleScreen },
    Event: { screen: EventPageScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Event',
    tabBarOptions: {
      activeTintColor: colors.userOrange,
    },
    navigationOptions: ({ navigation }) => {
      const tabBarIcon = ({ tintColor }) => {
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
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      };
      tabBarIcon.propTypes = {
        tintColor: PropTypes.string.isRequired,
      };
      // This code below is necessary for rendering the icons at the bottom of the tab
      return {
        tabBarIcon,
        headerLeft: (
          <TouchableOpacity>
            <Text>BACK</Text>
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity>
            <Text>BACK</Text>
          </TouchableOpacity>
        ),
      };
    },
  }
);

export default EventNavigator;
