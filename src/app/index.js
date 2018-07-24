import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeContainer from '../Home/screens/HomeContainer';
import ScheduleContainer from '../Schedule/screens/ScheduleContainer';
import SettingsContainer from '../Settings/screens/SettingsContainer';
import EventPageContainer from '../EventPage/screens/EventPageContainer';

const LoggedInNavigator = createBottomTabNavigator({
  Schedule: { screen: ScheduleContainer },
  Event: { screen: EventPageContainer },
  Settings: { screen: SettingsContainer },
}, {
  initialRouteName: 'Event',
});

const RootNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeContainer,
  },
  EventScreen: {
    screen: LoggedInNavigator,
  },
},
{
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white',
  },
  navigationOptions: {
    headerVisible: false,
  },
});

export default RootNavigator;

