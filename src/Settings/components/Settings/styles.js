import colors from '../../../globals/colors';

const styles = {
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  deleteButton: {
    backgroundColor: colors.eventAllRed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 8,
    position: 'absolute',
    bottom: 25,
  },
  deleteButtonText: {
    color: 'white',
  },
  settingBox: {
    padding: 20,
    alignSelf: 'stretch',
  },
  settingBoxTitle: {
    fontWeight: 'bold',
    padding: 2,
    color: 'darkslategrey',
  },
  settingBoxDetail: {
    width: 240,
    padding: 2,
    color: 'darkgrey',
  },
  switchButton: {
    padding: 30,
    position: 'absolute',
    right: 10,
    top: 40,
  },
};

export default styles;
