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
  boxContainer: {
    marginTop: 20,
    width: 330,
  },
  agendaTabs: {
    flexDirection: 'row',
    padding: 5,
  },
  sideTimeText: {
    textAlign: 'justify',
    color: 'deepskyblue',
  },

};

export default styles;
