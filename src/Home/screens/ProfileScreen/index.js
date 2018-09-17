import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
import colors from '../../../globals/colors';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Your Profile',
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ marginLeft: 20, color: colors.EA_pink }}>Back</Text>
        </TouchableOpacity >
      ),
    };
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.object,
    }).isRequired,
  };

  state = {
    user: this.props.navigation.state.params.user,
  }

  handleSuccessfulUpdate = (updatedUser, updatedFields) => {
    this.setState({ user: updatedUser }, function finishedUpdate() {
      this.props.navigation.navigate('Home');
      Alert.alert(`Updated: ${JSON.stringify(updatedFields)}`);
    });
  }

  handleLogOut = () => {
    AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Authentication');
  }

  render() {
    return (
      <Profile
        user={this.state.user}
        handleSuccessfulUpdate={this.handleSuccessfulUpdate}
        handleLogOut={this.handleLogOut}
      />
    );
  }
}

export default ProfileScreen;
