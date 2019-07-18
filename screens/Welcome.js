import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { screens } from '@navigation/constants';

const Welcome = ({ navigation, screenProps: { t } }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>{t('home.welcome', { appName: t('appName') })}</Text>
    <Button title={t('signIn')} onPress={() => navigation.navigate(screens.signIn)} />
    <Button title={t('signUp')} onPress={() => navigation.navigate(screens.signUp)} />
  </View>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
