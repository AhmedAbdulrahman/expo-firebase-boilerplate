import React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { saveSettings } from '@storage/settingsStorage';
import SettingsList from '@components/SettingsList';
import { screens } from '@navigation/constants';
import { usePrevious } from '@hooks/usePrevious';

const Settings = ({ navigation, screenProps: { t, locale, name, changeLocale } }) => {
  //get the previous props or state
  const prevState = usePrevious({ name, locale });

  const updateLocale = () => {
    const navigationLocale = navigation.getParam('locale', null);
    if (navigationLocale && prevState.locale !== navigationLocale) {
      locale = navigationLocale;
      changeLocale(navigationLocale);
    }
  };

  React.useEffect(() => {
    updateLocale();
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <SettingsList
            t={t}
            locale={locale}
            onPressItem={screen => navigation.navigate(screen, { currentLocale: locale })}
          />
          <Button title={t('signOut')} onPress={() => navigation.navigate(screens.welcome)} />
        </View>
        <View style={styles.inputContainer}>
          <Button
            title={t('settings.save_button')}
            onPress={() => saveSettings({ name, locale })}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 45,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    paddingTop: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
