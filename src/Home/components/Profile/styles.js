import { Dimensions } from 'react-native';
import colors from '../../../globals/colors';

const styles = {
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  userPhoto: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    marginTop: Dimensions.get('window').width * 0.1,
    borderRadius: 75,
  },
  updateTextContainer: {
    marginTop: 20,
  },
  updateText: {
    color: colors.EA_pink,
    fontWeight: '500',
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.9,
  },
  outerFormField: {
    flexDirection: 'row',
    padding: 30,
    paddingBottom: 0,
  },
  formText: {
    fontSize: 13,
    marginRight: 10,
    width: Dimensions.get('window').width * 0.2,
  },
  updateButton: {
    marginTop: 40,
    width: Dimensions.get('window').width * 0.65,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.EA_pink,
    backgroundColor: 'white',
  },
  logoutButton: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.65,
    borderRadius: 30,
    backgroundColor: colors.EA_pink,
  },
  updateButtonText: {
    padding: 15,
    textAlign: 'center',
    color: colors.EA_pink,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  logoutButtonText: {
    padding: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  innerFormField: {
    fontSize: 13,
    padding: 10,
    backgroundColor: colors.backgroundGrey,
    borderRadius: 10,
    letterSpacing: 0.5,
    width: Dimensions.get('window').width * 0.53,
  },
  errorMsg: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
};

export default styles;
