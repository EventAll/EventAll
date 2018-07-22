import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../components/Schedule.style';

const ScheduleScreen = (props) => {
  const { exampleScheduleList, selectDateScheduleList, switchStarIcon, showAgenda, showMyAgenda, selectDate, agenda, date } = props;

  function renderFlatList(item) {
    if (item.starred) {
      return (
        <View style={styles.scheduleBox}>
          <View style={styles.scheduleBoxLine} />
          <View style={styles.scheduleBoxSideTime}><Text style={styles.sideTimeText}>{item.startTime}{'\n'}{item.startZone}</Text></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.scheduleBoxTitle}>{item.title}</Text>
            <TouchableWithoutFeedback onPress={() => switchStarIcon(item)} >
              <View>
                <Ionicons name="ios-star" size={30} color="black" />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.scheduleBoxDetail}>{item.location}</Text>
          <Text style={styles.scheduleBoxDetail}>{item.startTime} {item.startZone} - {item.endTime} {item.endZone}</Text>
        </View>
      );
    }
    return null;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Schedule</Text>
      <TouchableOpacity style={styles.userProfileIconBox} >
        <Ionicons name="md-contact" size={40} style={styles.userProfileIcon} />
      </TouchableOpacity>
      <View style={styles.agendaTabs}>
        <TouchableOpacity style={styles.showAgenda} onPress={showAgenda}>
          {agenda && <View style={styles.agendaTabColor} />}
          <Text style={styles.agendaTabText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showMyAgenda} onPress={showMyAgenda}>
          {!agenda && <View style={styles.agendaTabColor} />}
          <Text style={styles.agendaTabText}>My Agenda</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarTabs}>
        {exampleScheduleList.map((schedule) => {
          return (
            <TouchableOpacity key={schedule.key} onPress={() => selectDate(schedule.key)}>
              <Text style={styles.calendarTabText}>{schedule.date}</Text>
              {date === schedule.key && <View style={styles.dateLine} />}
            </TouchableOpacity>
            );
        })}
      </View>
      {agenda === true &&
      <FlatList
        style={styles.boxContainer}
        data={selectDateScheduleList}
        extraData={props}
        renderItem={({ item }) => (
          <View style={styles.scheduleBox}>
            <View style={styles.scheduleBoxLine} />
            <View style={styles.scheduleBoxSideTime}><Text style={styles.sideTimeText}>{item.startTime}{'\n'}{item.startZone}</Text></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.scheduleBoxTitle}>{item.title}</Text>
              <TouchableWithoutFeedback onPress={() => switchStarIcon(item)} >
                <View>
                  {item.starred === true && <Ionicons name="ios-star" size={30} color="black" />}
                  {item.starred === false && <Ionicons name="ios-star-outline" size={30} color="black" />}
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.scheduleBoxDetail}>{item.location}</Text>
            <Text style={styles.scheduleBoxDetail}>{item.startTime} {item.startZone} - {item.endTime} {item.endZone}</Text>
          </View>
        )}
      />}
      {agenda !== true &&
      <FlatList
        style={styles.boxContainer}
        data={selectDateScheduleList}
        extraData={props}
        renderItem={({ item }) => (
          renderFlatList(item)
          )}
      />}
    </View>
  );
};

ScheduleScreen.propTypes = {
  exampleScheduleList: PropTypes.instanceOf(Array),
  selectDateScheduleList: PropTypes.instanceOf(Array),
  switchStarIcon: PropTypes.func.isRequired,
  showAgenda: PropTypes.func.isRequired,
  showMyAgenda: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  date: PropTypes.string,
  agenda: PropTypes.bool,
};

export default ScheduleScreen;

