import { StyleSheet } from 'react-native';
import colors from '../../../globals/colors';

const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    justifyContent: 'center',
    backgroundColor: colors.backgroundGrey,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.eventAllRed,
  },
  wrapper: {
    flex: 1,
  },
});

export default styles;
