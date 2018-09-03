import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './styles';

class HomePage extends Component {
  static propTypes = {
    upcomingEventList: PropTypes.instanceOf(Array),
    pastEventList: PropTypes.instanceOf(Array),
    goToEvent: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  displayEvents = (item) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.eventBox}
          onPress={() => this.props.goToEvent(item)}
        >
          <Image style={styles.eventBoxImage} source={{ uri: item.image }} />
          <Text style={styles.eventBoxTitle}>{item.title}</Text>
          <Text style={styles.eventBoxDetail}>
            {item.date}
            {'\n'}
            {item.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <View
          style={[StyleSheet.absoluteFill, styles.activityIndicatorContainer]}
        >
          <ActivityIndicator animating={this.props.loading} />
        </View>
        <Header handleSearch={this.props.handleSearch} />

        <Text style={styles.title}>Upcoming Events</Text>
        <FlatList
          style={styles.flexboxContainer}
          data={this.props.upcomingEventList}
          renderItem={({ item }) => this.displayEvents(item)}
        />
        <Text style={styles.pastTitle}>Past Events</Text>
        <FlatList
          style={styles.flexboxContainer}
          data={this.props.pastEventList}
          renderItem={({ item }) => this.displayEvents(item)}
        />
      </View>
    );
  }
}

export default HomePage;
