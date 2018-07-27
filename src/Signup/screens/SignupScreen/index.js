import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const logoImg = require('../../../../assets/EventAllLightLong.png');

class SignupScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    username: '',
    password: '',
    confirmedPassword: '',
    passwordsMatch: false,
  };

  verifyFBSignup = () => {
    // Facebook authentication here
  };

  confirmPassword = () => {
    const passwordsMatch = this.state.password === this.state.confirmedPassword;
    if (passwordsMatch) {
      // remove error message
    }
    else {
      // display error message
    }
    this.setState({ passwordsMatch });
  };

  verifySignup = () => {
    if (this.state.username === '') {
      // error message
      return;
    }

    if (this.state.password === '') {
      // error message
      return;
    }

    if (this.state.confirmedPassword === '') {
      // error message
      return;
    }

    if (!this.state.passwordsMatch) {
      // error message
      return;
    }

    // check with database to make sure user doesn't exist

    this.props.navigation.navigate('Home');
  };

  render() {
    console.log('signup');
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImg} />

        <TouchableOpacity
          style={styles.FBLoginButton}
          activeOpacity={0.7}
          onPress={this.verifyFBSignup}
        >
          <Text style={styles.buttonText}>Log In With Facebook</Text>
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.regularText}>Sign up as a new user</Text>

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
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={styles.formField}
            underlineColorAndroid="transparent"
            onChangeText={(confirmedPassword) =>
              this.setState({ confirmedPassword })
            }
          />
        </View>

        <TouchableOpacity
          style={styles.signUpButton}
          activeOpacity={0.7}
          onPress={this.verifySignup}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          Already registered? Log in
        </Text>
      </View>
    );
  }
}

export default SignupScreen;
