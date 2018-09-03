import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AsyncStorage } from 'react-native';

import EventNavigator from '../Event/navigator';
import AuthenticationNavigator from '../Authentication/navigator';
import AuthLoadingScreen from '../Authentication/screens/AuthLoadingScreen';
import HomeNavigator from '../Home/navigators';

const client = new ApolloClient({
  // Our GraphQL Server endpoint
  uri: 'http://ec2-34-227-178-75.compute-1.amazonaws.com:4000',
  // We can think of this clientState object as a global store that we can access through any component by wrapping it in a <ApolloClient>
  clientState: {
    // default state (upon fresh load of the app)
    defaults: {
      token: '',
    },
  },
  // this request middleware is executed every time we make an HTTP request with a <Query /> or <Mutation /> Component
  request: async (operation) => {
    // If there are currently no authentication headers
    if (!operation.getContext().headers) {
      // Read the headers from AsyncStorage (device cache) and set the headers. When we log out a user, we need to clear out this from asyncstorage.
      const token = await AsyncStorage.getItem('token');
      if (token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      }
    }
  },
});

/**
 * Switch navigator basically acts like a lightweight "Switch" statement and does't actually stack screens ontop of each other.
 * It is perfect for a top-level navigator because we don't want to render the Authentication screen when the user's already logged in
 */
const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Authentication: { screen: AuthenticationNavigator },
    Event: { screen: EventNavigator },
    Home: { screen: HomeNavigator },
  },
  {
    navigationOptions: {
      // Placeholder until we get an asset
      headerBackTitle: 'BACK',
    },
    initialRouteName: 'AuthLoading',
  }
);

const App = () => (
  <ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>
);

export default App;
