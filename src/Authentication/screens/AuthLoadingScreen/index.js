import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

/**
The purpose of this screen is to figure out of the user is logged in.
If the user is logged in, we redirect to the "Home" view.
if the user isn't logged in, we go to the "Authentication" view.
*/

class AuthLoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    isLoggedIn: false,
    isLoading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      const isLoggedIn = Boolean(token);
      this.setState({
        isLoading: false,
        isLoggedIn,
      });
    });
  }

  componentDidUpdate() {
    if (this.state.isLoggedIn) {
      this.props.navigation.navigate('Home');
    }
    else {
      this.props.navigation.navigate('Authentication');
    }
  }

  render() {
    if (this.state.isLoading) {
      return <View>Loading Screen!</View>;
    }

    return <View />;
  }
}

export default AuthLoadingScreen;
