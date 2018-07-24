import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import styles from '../components/ScheduleBox.style';


const ScheduleBox = ({ switchStarIcon, item }) => {
  return (
    <View style={styles.scheduleBox}>
      <View style={styles.scheduleBoxLine} />
      <View style={styles.scheduleBoxSideTime}><Text style={styles.sideTimeText}>{item.startTime}{'\n'}{item.startZone}</Text></View>
      <View style={styles.scheduleBoxFlex}>
        <Text style={styles.scheduleBoxTitle}>{item.title}</Text>
        <TouchableWithoutFeedback onPress={() => switchStarIcon(item)} >
          <View>
            {item.isStarred === true && <Ionicons name="ios-star" size={30} color="black" />}
            {item.isStarred === false && <Ionicons name="ios-star-outline" size={30} color="black" />}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.scheduleBoxDetail}>{item.location}</Text>
      <Text style={styles.scheduleBoxDetail}>{item.startTime} {item.startZone} - {item.endTime} {item.endZone}</Text>
    </View>
  );
};

ScheduleBox.propTypes = {
  item: PropTypes.object,
  switchStarIcon: PropTypes.func.isRequired,
};

export default ScheduleBox;

