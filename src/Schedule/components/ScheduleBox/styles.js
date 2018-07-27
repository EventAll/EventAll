import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scheduleBoxLine: {
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    height: 80,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  scheduleBoxTitle: {
    fontWeight: 'bold',
    padding: 5,
    color: 'black',
  },
  scheduleBoxDetail: {
    width: 240,
    padding: 5,
    color: 'darkgrey',
  },
  scheduleBoxTitleStar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleBox: {
    marginTop: 5,
    marginLeft: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  scheduleBoxFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleBoxSideTime: {
    position: 'absolute',
    left: -32,
    top: 20,
  },
});

export default styles;
