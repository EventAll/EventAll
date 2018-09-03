import { StyleSheet } from 'react-native';
import colors from '../../../globals/colors';

const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.eventAllRed,
  },
});

export default styles;
