import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CalendarTab = ({ exampleScheduleList, date, selectDate }) => {
  return (
    <View style={styles.calendarTabs}>
      {exampleScheduleList.map((schedule) => {
        return (
          <TouchableOpacity
            key={schedule.key}
            onPress={() => selectDate(schedule.key)}
          >
            <Text style={styles.calendarTabText}>{schedule.date}</Text>
            {date === schedule.key && <View style={styles.dateLine} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

CalendarTab.propTypes = {
  exampleScheduleList: PropTypes.instanceOf(Array),
  selectDate: PropTypes.func.isRequired,
  date: PropTypes.string,
};

export default CalendarTab;
