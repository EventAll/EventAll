import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../components/EventPage.style';

const EventPage = ({ event }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{event.title}</Text>
      <FlatList
        style={styles.boxContainer}
        data={event.data}
        renderItem={({ item }) => (
          <View key={item} style={styles.box}>
            <Text style={styles.expandText}>Expand</Text>
            <Text style={styles.subTitleText}>{item.title}</Text>
            {item.title === 'Details' && <Text style={styles.details}>Date: {item.date}</Text>}
            {item.title === 'Details' && <Text style={styles.details}>Time: {item.time}</Text>}
            {item.title === 'Details' && <Text style={styles.details}>Location: {item.location}</Text>}
            {item.title === 'Venue Map' && <Image style={styles.map} source={{ uri: item.imgURL }} />}
            {item.title === 'Resources' && item.resourceList.map((resourceList) => <Text key={resourceList.key} style={styles.details}>{resourceList.title}</Text>)}
            {item.title === 'Schedule' && item.scheduleList.map((scheduleItem) => <Text key={scheduleItem.key} style={styles.details}>{scheduleItem.time}  -  {scheduleItem.event}</Text>)}
          </View>)}
      />
    </View>
  );
};

EventPage.propTypes = {
  event: PropTypes.instanceOf(Object),
};

export default EventPage;

