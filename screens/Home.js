import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import { screens } from '@navigation/constants';

const Home = ({ navigation, screenProps: { t, locale } }) => (
  <View style={styles.container}>
    <StatusBar barStyle="default" />
    <Text style={styles.text}>{t('home.message')}</Text>
    <Button title={t('home.go')} onPress={() => navigation.navigate(screens.detail)} />
    <Text>Current locale: {locale}. </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
});

export default Home;
