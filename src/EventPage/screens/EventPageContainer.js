import React from 'react';
import EventPage from '../components/EventPage';

class EventPageContainer extends React.Component {
  state = {
    event: { title: '' },
  }
  componentDidMount() {
    this.setState({ event: { title: 'Creating Reality Hackthon', map: 'picture' } });
  }

  render() {
    return <EventPage event={this.state.event} />;
  }
}

export default EventPageContainer;

