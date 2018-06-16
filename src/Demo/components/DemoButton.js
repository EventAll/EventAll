import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';

const DemoButton = ({ onPress }) => (
  <View>
    <Button title="Demo Button" onPress={onPress} />
    <Text> Welcome to EventAll</Text>{' '}
  </View>
);

DemoButton.propTypes = {
  onPress: PropTypes.func,
};

DemoButton.defaultProps = {
  onPress: () => { },
};

export default DemoButton;
