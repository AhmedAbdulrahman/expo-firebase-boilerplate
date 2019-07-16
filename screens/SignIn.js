import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { screens } from '@navigation/constants';

class SignIn extends Component {
  goToHome = async () => {
    this.props.navigation.navigate('Dashboard');
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="john@example.com" />
        <TextInput placeholder="password" secureTextEntry={true} />
        <View>
          <TouchableOpacity onPress={this.goToHome}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text>
          Dont have an account?
          <Text onPress={() => this.props.navigation.navigate(screens.signUp)}>Sign Up</Text>
        </Text>
      </View>
    );
  }
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
