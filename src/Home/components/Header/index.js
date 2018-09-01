import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

class Header extends PureComponent {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.header}>
        <TextInput
          editable
          autocorrect={false}
          clearButtonMode="always"
          placeholder="Search for an event..."
          placeholderTextColor="#6E757E"
          onChangeText={(text) => this.setState({ text })}
          style={styles.headerText}
          onSubmitEditing={() => this.props.handleSearch(this.state.text)}
        />
      </View>
    );
  }
}

export default Header;
