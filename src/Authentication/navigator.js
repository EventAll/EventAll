import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

/**
 * Creates the Stack Navigator used for Login and Signup
 */
const AuthenticationNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
});

export default AuthenticationNavigator;
