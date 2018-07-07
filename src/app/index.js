import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import EventPage from '../EventPage/EventPage';
import EventPageContainer from '../EventPage/EventPageContainer';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// TODO: Pass in the real store to the provider
const fakeStore = createStore(() => { });

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={fakeStore}>
        <EventPageContainer />
      </Provider>
    </View >
  );
};

export default App;
