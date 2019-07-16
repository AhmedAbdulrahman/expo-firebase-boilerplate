import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import { screens } from '@navigation/constants';

class Home extends React.Component {
  signOut = async () => {
    this.props.navigation.navigate(screens.auth);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Text style={styles.text}>Home Screen Baby!!!</Text>
        <Button
          title="Go To Detail Screen"
          onPress={() => this.props.navigation.navigate(screens.detail)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default Home;
