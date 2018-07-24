import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../components/Schedule.style';
import CalendarTab from '../components/CalendarTab';
import ScheduleBox from '../components/ScheduleBox';


const ScheduleScreen = (props) => {
  const { exampleScheduleList, selectDateScheduleList, switchStarIcon, toggleAgenda, selectDate, agenda, date } = props;

  function renderFlatList(item) {
    if (item.isStarred) {
      return (
        <ScheduleBox switchStarIcon={switchStarIcon} item={item} />
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
        <TouchableOpacity style={styles.showAgenda} onPress={() => toggleAgenda(true)}>
          {agenda && <View style={styles.agendaTabColor} />}
          <Text style={styles.agendaTabText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showMyAgenda} onPress={() => toggleAgenda(false)}>
          {!agenda && <View style={styles.agendaTabColor} />}
          <Text style={styles.agendaTabText}>My Agenda</Text>
        </TouchableOpacity>
      </View>
      <CalendarTab exampleScheduleList={exampleScheduleList} date={date} selectDate={selectDate} />
      {agenda === true &&
      <FlatList
        style={styles.boxContainer}
        data={selectDateScheduleList}
        extraData={props}
        renderItem={({ item }) => (
          <ScheduleBox switchStarIcon={switchStarIcon} item={item} />
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
  toggleAgenda: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  date: PropTypes.string,
  agenda: PropTypes.bool,
};

export default ScheduleScreen;

