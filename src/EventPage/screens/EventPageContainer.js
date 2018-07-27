import React from 'react';
import EventPage from '../components/EventPage';

class EventPageContainer extends React.Component {
  state = {
    event: { key: '1',
      title: 'Creating Reality Hackthon',
      data: [{ key: '2', title: 'Details', date: 'Thursday 22 February', time: '12pm - 6pm', location: '3670 Trousdale Pkwy, Los Angeles, CA 90089' },
        { key: '3', title: 'Venue Map', imgURL: 'https://i0.wp.com/csudhei.org/wp/wp-content/uploads/2016/04/yfvcytfytfytfytfyfty.jpg?zoom=2&fit=960%2C960' },
        { key: '4', title: 'Resources', resourceList: [{ key: '41', title: 'Competition Rules' }, { key: '42', title: 'Lean Canvas Template' }] },
        { key: '5', title: 'Schedule', scheduleList: [{ key: '51', time: '12:00pm', event: 'Check-in' }, { key: '52', time: '12:30pm', event: 'Welcome, Rules, and Announcements' }, { key: '53', time: '1:00pm', event: 'Hacking Starts' }, { key: '54', time: '5:00pm', event: 'Hacking Ends' }, { key: '55', time: '6:00pm', event: 'Closing Speech and Prices' }] }] },
  }
  render() {
    return <EventPage event={this.state.event} />;
  }
}

export default EventPageContainer;

