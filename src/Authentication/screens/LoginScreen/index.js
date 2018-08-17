import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import Login from '../../components/Login';
import { LOGIN } from '../../../graphql/mutations';

const LoginScreen = ({ navigation }) => (
  <Mutation mutation={LOGIN}>
    {(login, { data, loading, error }) => {
      if (error) {
        Alert.alert('There was an error logging in.');
      }
      else if (data) {
        const { token } = data.login;
        AsyncStorage.setItem('token', token).then(() => navigation.navigate('Home'));
      }

      return (
        <Login
          navigation={navigation}
          dispatchMutation={login}
          loading={loading}
        />
      );
    }}
  </Mutation>
);

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
