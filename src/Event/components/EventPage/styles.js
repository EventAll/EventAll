import { StyleSheet } from 'react-native';
import colors from '../../../globals/colors';

export default StyleSheet.create({
  page: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  boxContainer: {
    marginTop: 30,
    width: 330,
  },
  box: {
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: colors.backgroundGrey,
    borderRadius: 15,
  },
  subTitleText: {
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingBottom: 2,
  },
  details: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: 13,
  },
  map: {
    width: 300,
    height: 300,
  },
  expandText: {
    color: 'darkorange',
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'stretch',
    marginBottom: -15,
  },
});
