import colors from '../../globals/colors';

const styles = {
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    marginLeft: 10,
    marginBottom: 13,
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  userProfileIconBox: {
    position: 'absolute',
    top: 70,
    right: 30,
  },
  userProfileIcon: {
    color: colors.userOrange,
  },
  showAgenda: {
    width: 90,
  },
  showMyAgenda: {
    width: 90,
  },
  agendaTabText: {
    padding: 3,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'deepskyblue',
  },
  agendaTabColor: {
    backgroundColor: 'deepskyblue',
    width: 90,
    height: 25,
    position: 'absolute',
  },
  dateLine: {
    borderBottomColor: 'purple',
    borderBottomWidth: 1,
    width: 75,
    position: 'absolute',
    left: 3,
    top: 20,
  },
  boxContainer: {
    marginTop: 20,
    width: 330,
  },
  agendaTabs: {
    flexDirection: 'row',
    padding: 5,
  },
  calendarTabs: {
    flexDirection: 'row',
    padding: 5,
  },
  calendarTabText: {
    fontSize: 13,
    paddingHorizontal: 6,
  },
  scheduleBox: {
    marginTop: 5,
    marginLeft: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  scheduleBoxSideTime: {
    position: 'absolute',
    left: -32,
    top: 20,
  },
  sideTimeText: {
    textAlign: 'justify',
    color: 'deepskyblue',
  },
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
};

export default styles;
