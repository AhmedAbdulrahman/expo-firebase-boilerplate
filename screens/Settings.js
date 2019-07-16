import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { screens } from '@navigation/constants';

class Settings extends Component {
  goToWelcome = async () => {
    this.props.navigation.navigate(screens.welcome);
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Out" onPress={this.goToWelcome} />
      </View>
    );
  }
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
