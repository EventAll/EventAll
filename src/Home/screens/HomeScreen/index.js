import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../../components/Home';

class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  state = {
    upcomingEventList: [
      {
        key: '1',
        title: 'Creating Reality Hackathon',
        image:
          'https://i.amz.mshcdn.com/GJo7iABj4lZsM71rQqUVIrjsz_U=/950x534/filters:quality(90)/2012%2F12%2F04%2F84%2Flaptopspowe.bLE.jpg',
        date: 'Thursday 22 Feburary',
        time: '4pm - 6pm',
      },
      {
        key: '2',
        title: "Muriel's Wedding",
        image:
          'https://theurbantwist.com/wp-content/uploads/2018/02/02222018-weddings.jpg',
        date: 'Monday 12 May',
        time: '9am - 9pm',
      },
    ],
    pastEventList: [
      {
        key: '1',
        title: 'Coachella',
        image:
          'https://pmcvariety.files.wordpress.com/2018/04/coachella.jpg?w=1000&h=563&crop=1',
        date: 'April 14 - 23',
      },
      {
        key: '2',
        title: 'LA Festival of Books',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fest_of_Books_2009.jpg',
        date: 'April 22 - 23',
      },
    ],
  };

  goToEvent = (event) => {
    this.props.navigation.navigate('EventScreen', { event });
  };

  render() {
    return (
      <Home
        upcomingEventList={this.state.upcomingEventList}
        pastEventList={this.state.pastEventList}
        goToEvent={this.goToEvent}
      />
    );
  }
}

export default HomeScreen;
