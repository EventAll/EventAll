import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import Home from '../../components/Home';
import { GET_EVENTS } from '../../../graphql/queries';

const logoImg = require('../../../../assets/EventAll-Text.png');

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const user = {
      userPhoto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1280px-President_Barack_Obama.jpg',
      name: 'Barack Obama',
      email: 'barack@whitehouse.gov',
      password: 'bushdid911',
    };

    return {
      title: 'Your Profile',
      headerLeft: null,
      headerTitle: (
        <Image source={logoImg} style={{ height: 30, width: 150 }} />
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', { user })}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10, borderRadius: 15 }}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1280px-President_Barack_Obama.jpg',
            }}
          />
        </TouchableOpacity>
      ),
    };
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    // upcomingEventList: [
    //   {
    //     key: '1',
    //     title: 'Creating Reality Hackathon',
    //     image:
    //       'https://i.amz.mshcdn.com/GJo7iABj4lZsM71rQqUVIrjsz_U=/950x534/filters:quality(90)/2012%2F12%2F04%2F84%2Flaptopspowe.bLE.jpg',
    //     date: 'Thursday 22 Feburary',
    //     time: '4pm - 6pm',
    //   },
    //   {
    //     key: '2',
    //     title: "Muriel's Wedding",
    //     image:
    //       'https://theurbantwist.com/wp-content/uploads/2018/02/02222018-weddings.jpg',
    //     date: 'Monday 12 May',
    //     time: '9am - 9pm',
    //   },
    // ],
    // pastEventList: [
    //   {
    //     key: '1',
    //     title: 'Coachella',
    //     image:
    //       'https://pmcvariety.files.wordpress.com/2018/04/coachella.jpg?w=1000&h=563&crop=1',
    //     date: 'April 14 - 23',
    //   },
    //   {
    //     key: '2',
    //     title: 'LA Festival of Books',
    //     image:
    //       'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fest_of_Books_2009.jpg',
    //     date: 'April 22 - 23',
    //   },
    // ],
    searchString: '',
  };

  goToEvent = (event) => {
    this.props.navigation.navigate('Event', { event });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString });
  };

  mapEvents = (events = []) => {
    const upcomingEventList = [];
    const pastEventList = [];
    const now = new Date();

    events.forEach((event, i) => {
      const { startDateUtc, name, duration } = event;

      const eventStartDate = new Date(startDateUtc);
      const eventModel = {
        key: `${i}-${name}`,
        title: name,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fest_of_Books_2009.jpg',
        date: eventStartDate.toLocaleDateString(),
      };
      if (eventStartDate > now) {
        const startHour = eventStartDate.getHours();
        const convention = startHour >= 12 ? 'PM' : 'AM';
        const timeString = `${startHour}${convention} - ${startHour +
          duration}${convention}`;
        eventModel.time = timeString;
        upcomingEventList.push(eventModel);
      }
      else {
        pastEventList.push(eventModel);
      }
    });
    return {
      upcomingEventList,
      pastEventList,
    };
  };

  render() {
    // console.log(this.props);
    const { searchString } = this.state;
    return (
      <Swiper>
        <Query query={GET_EVENTS} variables={{ searchString }}>
          {({ loading, data, error }) => {
            const { upcomingEventList, pastEventList } = this.mapEvents(
              data.events
            );
            return (
              <Home
                upcomingEventList={upcomingEventList}
                pastEventList={pastEventList}
                goToEvent={this.goToEvent}
                handleSearch={this.handleSearch}
              />
            );
          }}
        </Query>
      </Swiper>
    );
  }
}

export default HomeScreen;
