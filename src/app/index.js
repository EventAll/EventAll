import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../Home/screens/HomeScreen';
import EventNavigator from '../Event/navigator';
import AuthenticationNavigator from '../Authentication/navigator';
import AuthLoadingScreen from '../Authentication/screens/AuthLoadingScreen';

/**
 * Switch navigator basically acts like a lightweight "Switch" statement and does't actually stack screens ontop of each other.
 * It is perfect for a top-level navigator because we don't want to render the Authentication screen when the user's already logged in
 */
const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Authentication: { screen: AuthenticationNavigator },
    Event: { screen: EventNavigator },
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions: {
      // Placeholder until we get an asset
      headerBackTitle: 'BACK',
    },
    initialRouteName: 'AuthLoading',
  }
);

export default RootNavigator;
