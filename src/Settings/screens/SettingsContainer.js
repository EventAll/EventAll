import React from 'react';
import Settings from '../components/Settings';

class SettingsContainer extends React.Component {
  state = {
    pushNotificationSwitch: true,
  }
  toggleSwitch = (value) => {
    this.setState({ pushNotificationSwitch: value });
  };
  render() {
    return <Settings pushNotificationSwitch={this.state.pushNotificationSwitch} onToggle={this.toggleSwitch} />;
  }
}

export default SettingsContainer;

