import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({

  page: {
    padding: 10,
  },
  title: {
    marginTop: 60,
    paddingHorizontal: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  boxContainer: {
    marginTop: 30,
    width: 330,

  },
  box: {
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
  },
  subTitleText: {
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingBottom: 2,
  },
  details: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: 13,
  },
  map: {
    width: 300,
    height: 300,
  },
  expandText: {
    color: 'darkorange',
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'stretch',
    marginBottom: -15,

  },
});

const EventPage = ({ event }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{event.title}</Text>

      <FlatList
        style={styles.boxContainer}
        data={[{ key: 'Details', date: 'Thursday 22 February', time: '12pm - 6pm', location: '3670 Trousdale Pkwy, Los Angeles, CA 90089' },
        { key: 'Venue Map', imgURL: 'https://i0.wp.com/csudhei.org/wp/wp-content/uploads/2016/04/yfvcytfytfytfytfyfty.jpg?zoom=2&fit=960%2C960' },
        { key: 'Resources', resourceList: ['Competition Rules', 'Lean Canvas Template'] },
        { key: 'Schedule', scheduleList: [{ time: '12:00pm', event: 'Check-in' }, { time: '12:30pm', event: 'Welcome, Rules, and Announcements' }, { time: '1:00pm', event: 'Hacking Starts' }, { time: '5:00pm', event: 'Hacking Ends' }, { time: '6:00pm', event: 'Closing Speech and Prices' }] }]}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.expandText}>Expand</Text>
            <Text style={styles.subTitleText}>{item.key}</Text>
            {item.key === 'Details' && <Text style={styles.details}>Date: {item.date}</Text>}
            {item.key === 'Details' && <Text style={styles.details}>Time: {item.time}</Text>}
            {item.key === 'Details' && <Text style={styles.details}>Location: {item.location}</Text>}
            {item.key === 'Venue Map' && <Image style={styles.map} source={{ uri: item.imgURL }} />}
            {item.key === 'Resources' && item.resourceList.map((resource) => <Text style={styles.details}>{resource}</Text>)}
            {item.key === 'Schedule' && item.scheduleList.map((scheduleItem) => <Text style={styles.details}>{scheduleItem.time}  -  {scheduleItem.event}</Text>)}
          </View>)
        }
      />

    </View>
  );
};

EventPage.propTypes = {
  event: PropTypes.object,
};

export default EventPage;
