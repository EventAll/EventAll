import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert, StyleSheet } from 'react-native';
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
    email: '',
    password: '',
    confirmedPassword: '',
    errors: {},
  };

  getTextFieldStyles = (error) => {
    if (!error) {
      return styles.formField;
    }
    return StyleSheet.flatten([styles.formField, styles.errorMsg]);
  }

  handleSignUpPressed = () => {
    const errors = this.verifySignup();
    if (!isEmpty(errors)) {
      // Find some better way to display errors
      Alert.alert(JSON.stringify(errors));
      return;
    }
    const payload = {
      variables: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    this.props.dispatchMutation(payload);
  };

  handleTextFieldInput = (value, field) => {
    const errors = { ...this.state.errors, [field]: false };
    this.setState({ [field]: value, errors });
  }

  verifySignup = () => {
    const errors = {};
    if (this.state.email === '') {
      errors.email = true;
    }

    if (this.state.password === '') {
      errors.password = true;
    }

    if (this.state.confirmedPassword === '') {
      errors.confirmedPassword = true;
    }

    if (this.state.password !== this.state.confirmedPassword && !errors.email && !errors.password && !errors.confirmedPassword) {
      errors.passwordsMatch = false;
    }
    this.setState({ errors });
    return errors;
  };

  verifyFBSignup = () => {
    // Facebook authentication here
  };

  render() {
    const { errors } = this.state;
    console.log(errors);
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
            placeholder="Email"
            style={this.getTextFieldStyles(errors.email)}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.passwordInput.focus()}
            blurOnSubmit={false}
            onChangeText={(text) => this.handleTextFieldInput(text, 'email')}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={this.getTextFieldStyles(errors.password)}
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            ref={(input) => {
              this.passwordInput = input;
            }}
            onSubmitEditing={() => this.confirmPasswordInput.focus()}
            onChangeText={(text) => this.handleTextFieldInput(text, 'password')}
          />
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={this.getTextFieldStyles(errors.confirmedPassword)}
            underlineColorAndroid="transparent"
            ref={(input) => {
              this.confirmPasswordInput = input;
            }}
            onSubmitEditing={this.handleSignUpPressed}
            onChangeText={(text) => this.handleTextFieldInput(text, 'confirmedPassword')}
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
