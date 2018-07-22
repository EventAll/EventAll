import colors from '../../globals/colors';

const styles = {
  screen: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 60,
    marginLeft: 10,
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  pastTitle: {
    marginLeft: 10,
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    color: 'grey',
  },
  userProfileIconBox: {
    position: 'absolute',
    top: 70,
    right: 30,
  },
  userProfileIcon: {
    color: colors.userOrange,
  },
  flexboxContainer: {
    marginTop: 10,
    width: 350,
  },
  eventBoxImage: {
    position: 'absolute',
    top: 25,
    left: -80,
    width: 85,
    height: 70,
    borderRadius: 5,
  },
  eventBox: {
    left: 95,
    padding: 20,
    alignSelf: 'stretch',
  },
  eventBoxTitle: {
    fontWeight: 'bold',
    padding: 2,
    color: 'darkslategrey',
  },
  eventBoxDetail: {
    width: 240,
    padding: 2,
    color: 'darkgrey',
  },
};

export default styles;
