import { Component } from 'react';
import { AsyncStorage } from 'react-native';

/**
The purpose of this component is to log the user out
*/

class LogOut extends Component {
  componentDidMount() {
    AsyncStorage.removeItem('token');
  }
}

export default LogOut;
