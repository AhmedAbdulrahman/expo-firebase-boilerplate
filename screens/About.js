import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>About Screen</Text>
  </View>
);

AboutScreen.navigationOptions = ({ screenProps: { t } }) => ({
  title: t('settings.about'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default AboutScreen;
