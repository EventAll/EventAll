import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';

import styles from './styles';

const logoImg = require('../../../../assets/EventAllLightLong.png');

class SignupScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    dispatchMutation: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    username: '',
    password: '',
    confirmedPassword: '',
    errors: {},
  };

  verifyFBSignup = () => {
    // Facebook authentication here
  };

  verifySignup = () => {
    const errors = {};
    if (this.state.username === '') {
      errors.username = true;
    }

    if (this.state.password === '') {
      errors.password = true;
    }

    if (this.state.confirmedPassword === '') {
      errors.confirmedPassword = true;
    }

    if (this.state.password !== this.state.confirmedPassword && !errors.username && !errors.password && !errors.confirmedPassword) {
      errors.passwordsMatch = false;
    }
    this.setState({ errors });
    return errors;
  };

  handleSignUpPressed = () => {
    const errors = this.verifySignup();
    if (!isEmpty(errors)) {
      Alert.alert('Errors!');
      return;
    }
    const payload = {
      variables: {
        email: this.state.username,
        password: this.state.password,
      },
    };
    this.props.dispatchMutation(payload);
  };

  render() {
    const { errors } = this.state;
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
        <ActivityIndicator animating={this.props.loading} />
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
          onPress={this.handleSignUpPressed}
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
