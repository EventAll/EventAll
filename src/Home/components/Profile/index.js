import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import { ImagePicker, Permissions } from 'expo';

import styles from './styles';

const Profile = ({ user, handleSuccessfulUpdate, handleLogOut }) => {
  const updatedUser = {
    userPhoto: user.userPhoto,
    name: user.name,
    email: user.email,
    password: '',
    confirmedPassword: '',
  };

  let errors = {};

  function getTextFieldStyles(error) {
    if (!error) return styles.innerFormField;
    return StyleSheet.flatten([styles.innerFormField, styles.errorMsg]);
  }

  function handleTextFieldInput(value, field) {
    if (field === 'name') {
      updatedUser.name = value;
    }
    else if (field === 'email') {
      updatedUser.email = value;
    }
    else if (field === 'password') {
      updatedUser.password = value;
    }
    else if (field === 'confirmedPassword') {
      updatedUser.confirmedPassword = value;
    }
  }

  function displayErrorMsg(displayErrors) {
    if (displayErrors.name) {
      Alert.alert('Name must not be empty.');
    }
    else if (displayErrors.email) {
      Alert.alert('Email must not be empty.');
    }
    else if (displayErrors.noConfirmedPassword) {
      Alert.alert('Please confirm your password.');
    }
    else if (displayErrors.newPasswordsDontMatch) {
      Alert.alert('New passwords do not match.');
    }
    else if (displayErrors.samePassword) {
      Alert.alert('Please enter a new password.');
    }
  }

  function handleLogOutPressed() {
    console.log('i was there');
    handleLogOut();
  }

  function handleUpdatePressed() {
    const errorsTemp = {};
    const updatedFields = {};

    // Check to see if photo has been updated
    if (updatedUser.userPhoto !== user.userPhoto) {
      updatedFields.photo = true;
    }

    // Verifying username update
    if (updatedUser.name === '') {
      errorsTemp.name = true; // name must not be empty
    }
    else if (updatedUser.name !== user.name) {
      updatedFields.name = true;
    }

    // Verifying email update
    if (updatedUser.email === '') {
      errorsTemp.email = true; // email must not be empty
    }
    else if (updatedUser.email !== user.email) {
      updatedFields.name = true;
    }

    // Verifying password update
    if ((updatedUser.confirmedPassword === '' && updatedUser.password !== '') || (updatedUser.password === '' && updatedUser.confirmedPassword !== '')) {
      errorsTemp.noConfirmedPassword = true;
    }
    else if (updatedUser.password !== '' && updatedUser.confirmedPassword !== '') {
      if (updatedUser.confirmedPassword !== updatedUser.password) {
        errorsTemp.newPasswordsDontMatch = true;
      }
      else if (updatedUser.password === user.password) { // cannot be same password
        errorsTemp.samePassword = true;
      }
      updatedFields.password = true;
    }

    errors = errorsTemp;

    if (!isEmpty(errors)) {
      displayErrorMsg(errors);
    }
    else {
      const updateUser = {
        userPhoto: updatedUser.userPhoto,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
      };
      handleSuccessfulUpdate(updateUser, updatedFields);
    }
  }

  async function hasPermissions() {
    const { CAMERA, CAMERA_ROLL } = Permissions;
    const permissions = {
      [CAMERA]: await Permissions.askAsync(CAMERA),
      [CAMERA_ROLL]: await Permissions.askAsync(CAMERA_ROLL),
    };

    if (permissions[CAMERA].status !== 'granted' || permissions[CAMERA_ROLL].status !== 'granted') {
      return Promise.reject(new Error('camera and camera roll permissions required'));
    }
    return Promise.resolve(true);
  }

  async function selectImage() {
    if (await hasPermissions()) {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4],
        base64: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!result.cancelled) {
        updatedUser.userPhoto = result.uri;
      }
    }
  }

  return (
    <View style={styles.screen} >
      <Image
        style={styles.userPhoto}
        source={{ uri: user.userPhoto }}
      />
      <TouchableOpacity
        style={styles.updateTextContainer}
        onPress={selectImage}
      >
        <Text style={styles.updateText}>Change profile photo</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <View style={styles.outerFormField}>
          <Text style={styles.formText}>Name</Text>
          <TextInput
            defaultValue={user.name}
            style={getTextFieldStyles(errors.name)}
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onChangeText={(text) => handleTextFieldInput(text, 'name')}
          />
        </View>
        <View style={styles.outerFormField}>
          <Text style={styles.formText}>Email</Text>
          <TextInput
            defaultValue={user.email}
            style={getTextFieldStyles(errors.email)}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onChangeText={(text) => handleTextFieldInput(text, 'email')}
          />
        </View>

        <View style={styles.outerFormField}>
          <Text style={styles.formText}>New Password</Text>
          <TextInput
            secureTextEntry
            placeholder="New Password"
            style={getTextFieldStyles(errors.newPassword)}
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onChangeText={(text) => handleTextFieldInput(text, 'password')}
          />
        </View>

        <View style={styles.outerFormField}>
          <Text style={styles.formText}>Confirm Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Retype Password"
            style={getTextFieldStyles(errors.confirmedPassword)}
            underlineColorAndroid="transparent"
            onSubmitEditing={handleUpdatePressed}
            onChangeText={(text) => handleTextFieldInput(text, 'confirmedPassword')}
          />
        </View>

      </View>
      <TouchableOpacity
        style={styles.updateButton}
        activeOpacity={0.7}
        onPress={handleUpdatePressed}
      >
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={handleLogOutPressed}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

    </View >
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(String),
  handleSuccessfulUpdate: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default Profile;
