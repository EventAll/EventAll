import React, { Component } from 'react';
import Settings from '../../components/Settings';

class SettingsScreen extends Component {
  state = {
    pushNotificationSwitch: true,
  };
  toggleSwitch = (value) => {
    this.setState({ pushNotificationSwitch: value });
  };
  render() {
    return (
      <Settings
        pushNotificationSwitch={this.state.pushNotificationSwitch}
        onToggle={this.toggleSwitch}
      />
    );
  }
}

export default SettingsScreen;
