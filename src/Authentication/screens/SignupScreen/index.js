import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import SignUp from '../../components/SignUp';
import { CREATE_ACCOUNT } from '../../../graphql/mutations';

const SignupScreen = ({ navigation }) => (
  <Mutation mutation={CREATE_ACCOUNT}>
    {(createAccount, { data, loading, error }) => {
      if (error) {
        Alert.alert('There was an error signing up.');
      }
      else if (data) {
        const { token } = data.createAccount;
        AsyncStorage.setItem('token', token).then(() => navigation.navigate('Home'));
      }

      return (
        <SignUp
          navigation={navigation}
          dispatchMutation={createAccount}
          loading={loading}
        />
      );
    }}
  </Mutation>
);

SignupScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default SignupScreen;
