import React from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SettingsScreen = ({ pushNotificationSwitch, onToggle }) => {
  const deleteEvent = () => {};
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Event Settings</Text>
      <View style={styles.settingBox}>
        <Text style={styles.settingBoxTitle}>Push Notifications</Text>
        <Text style={styles.settingBoxDetail}>
          Receive push notifications whenever someone posts to the timeline
        </Text>
        <Switch
          style={styles.switchButton}
          onValueChange={onToggle}
          value={pushNotificationSwitch}
        />
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={deleteEvent}>
        <Text style={styles.deleteButtonText}>Delete Event</Text>
      </TouchableOpacity>
    </View>
  );
};

SettingsScreen.propTypes = {
  pushNotificationSwitch: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default SettingsScreen;
