import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Search for an event...</Text>
    </View>
  );
};

export default Header;
