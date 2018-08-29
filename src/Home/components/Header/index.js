import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header} />
  );
};

export const withHeader = (ChildComponent) => {
  return (props) => (
    <View style={styles.wrapper}>
      <Header />
      <ChildComponent {...props} />
    </View>
  );
};

export default Header;
