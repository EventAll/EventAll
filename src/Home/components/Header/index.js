import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header} />
  );
};

export const withHeader = (ChildComponent) => {
  return () => (
    <View style={styles.wrapper}>
      <Header />
      <ChildComponent />
    </View>
  );
};

export default Header;
