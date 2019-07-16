import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { screens } from '@navigation/constants';

class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  signIn = async () => {
    this.props.navigation.navigate(screens.signIn);
  };

  signUp = async () => {
    this.props.navigation.navigate(screens.signUp);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={this.signIn} />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
