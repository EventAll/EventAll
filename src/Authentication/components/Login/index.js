import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';

import styles from './styles';

const logoImg = require('../../../../assets/EventAllLightLong.png');

class LoginScreen extends Component {
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
    errors: {},
  };

  getTextFieldStyles = (error) => {
    if (!error) {
      return styles.formField;
    }
    return StyleSheet.flatten([styles.formField, styles.errorMsg]);
  }

  handleLoginPressed = () => {
    const errors = this.verifyLogin();
    if (!isEmpty(errors)) {
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

  verifyLogin = () => {
    const errors = {};
    if (this.state.email === '') {
      errors.email = true;
    }

    if (this.state.password === '') {
      errors.password = true;
    }
    this.setState({ errors });
    return errors;
  };

  verifyFBSignup = () => {
    // Facebook authentication here
  };

  render() {
    const { errors } = this.state;
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
            ref={(input) => {
              this.passwordInput = input;
            }}
            onChangeText={(text) => this.handleTextFieldInput(text, 'password')}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={this.handleLoginPressed}
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
