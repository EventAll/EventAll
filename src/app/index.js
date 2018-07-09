import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBottomTabNavigator } from 'react-navigation';

import DemoButton from '../Demo/components/DemoButton';
import EventScreen from '../Event/components/Event';
import TimelineScreen from '../Timeline/components/Timeline';
import SettingsScreen from '../Settings/components/Settings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootNavigator = createBottomTabNavigator({
  Timeline: { screen: TimelineScreen },
  Event: { screen: EventScreen },
  Settings: { screen: SettingsScreen },
});

export default RootNavigator;
