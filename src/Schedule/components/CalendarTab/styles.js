import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calendarTabs: {
    flexDirection: 'row',
    padding: 5,
  },
  calendarTabText: {
    fontSize: 13,
    paddingHorizontal: 6,
  },
  dateLine: {
    borderBottomColor: 'purple',
    borderBottomWidth: 1,
    width: 75,
    position: 'absolute',
    left: 3,
    top: 20,
  },
});

export default styles;
