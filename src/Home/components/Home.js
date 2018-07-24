import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from '../components/Home.style';

const HomePage = ({ upcomingEventList, pastEventList, goToEvent }) => {
  function displayEvents(item) {
    return (
      <View >
        <TouchableOpacity style={styles.eventBox} onPress={() => goToEvent(item)}>
          <Image style={styles.eventBoxImage} source={{ uri: item.image }} />
          <Text style={styles.eventBoxTitle}>{item.title}</Text>
          <Text style={styles.eventBoxDetail}>{item.date}{'\n'}{item.time}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Upcoming Events</Text>
      <TouchableOpacity style={styles.userProfileIconBox} >
        <Ionicons name="md-contact" size={40} style={styles.userProfileIcon} />
      </TouchableOpacity>
      <FlatList
        style={styles.flexboxContainer}
        data={upcomingEventList}
        renderItem={({ item }) => (
          displayEvents(item)
          )}
      />
      <Text style={styles.pastTitle}>Past Events</Text>
      <FlatList
        style={styles.flexboxContainer}
        data={pastEventList}
        renderItem={({ item }) => (
          displayEvents(item)
        )}
      />
    </View>
  );
};

HomePage.propTypes = {
  upcomingEventList: PropTypes.instanceOf(Array),
  pastEventList: PropTypes.instanceOf(Array),
  goToEvent: PropTypes.func,
};

export default HomePage;

