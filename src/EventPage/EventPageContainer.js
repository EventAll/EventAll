import React from 'react';
import EventPage from './EventPage';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//   },


// });
// placeholder for actual fetching from the backend
// const fetchEvent = (event) =>
//   event([
//     { title: 'Creating Reality Hackthon', map: 'https://i0.wp.com/csudhei.org/wp/wp-content/uploads/2016/04/yfvcytfytfytfytfyfty.jpg?zoom=2&fit=960%2C960' },
//   ]);


class EventPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      event: { title: [] },
    };
  }

  componentDidMount() {
    this.setState({ event: { title: 'Creating Reality Hackthon', map: 'picture' } });
  }

  render() {
    return <EventPage event={this.state.event} />;
  }
}

export default EventPageContainer;
