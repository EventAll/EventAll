import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const logoImg = require('../../../../assets/EventAllLightLong.png');

class LoginScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  verifyFBLogin = () => {
    // Facebook authentication here
  };

  verifyLogin = () => {
    if (this.state.username === '') {
      // error message
      return;
    }

    if (this.state.password === '') {
      // error message
      return;
    }

    // make sure credentials match ones from database

    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImg} />

        <TouchableOpacity
          style={styles.FBLoginButton}
          activeOpacity={0.7}
          onPress={this.verifyFBLogin}
        >
          <Text style={styles.buttonText}>Log In With Facebook</Text>
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.regularText}>Log in to your account</Text>

        <View style={styles.formContainer}>
          <TextInput
            placeholder="Username or Email"
            style={styles.formField}
            underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({ username })}
          />

          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.formField}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={this.verifyLogin}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text
          style={styles.signUpText}
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          Don&apos;t have an account? Sign up
        </Text>
      </View>
    );
  }
}

export default LoginScreen;
