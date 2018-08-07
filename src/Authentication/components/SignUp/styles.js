import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../globals/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 50,
  },

  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: (Dimensions.get('window').width * 0.7) / 3,
  },

  FBLoginButton: {
    marginTop: 30,
    width: Dimensions.get('window').width * 0.65,
    borderRadius: 30,
    backgroundColor: colors.facebookBlue,
  },

  signUpButton: {
    marginTop: 30,
    width: Dimensions.get('window').width * 0.65,
    borderRadius: 30,
    backgroundColor: colors.EA_pink,
  },

  buttonText: {
    padding: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  rowContainer: {
    flexDirection: 'row',
    margin: 10,
  },

  line: {
    width: Dimensions.get('window').width * 0.26,
    height: 0.7,
    backgroundColor: 'black',
    margin: 30,
  },

  or: {
    marginTop: 20,
    fontWeight: '600',
  },

  formContainer: {
    margin: 10,
    alignItems: 'flex-start',
    width: Dimensions.get('window').width * 0.75,
  },

  formField: {
    height: 40,
    fontSize: 13,
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.07)',
    borderRadius: 10,
    letterSpacing: 0.5,
    width: Dimensions.get('window').width * 0.75,
    marginTop: 15,
  },

  loginText: {
    textAlign: 'right',
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 40,
  },

  regularText: {
    fontWeight: '500',
  },

  errorMsg: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
