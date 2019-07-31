import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { compose } from 'recompose';
import { withAppContext } from '@containers/App/AppContext';
import Container from '@components/Container';
import { BodyBold } from '@components/Text';
import { saveSettings } from '@storage/settingsStorage';
import SettingsList from '@components/SettingsList';
import { screens } from '@navigation/constants';
import { usePrevious } from '@hooks/usePrevious';
import i18n from '@i18n';

const Settings = ({ navigation, screenProps: { t, locale, changeLocale, theme }, firebase }) => {
  //get the previous props or state
  const prevState = usePrevious({ locale });

  const updateLocale = React.useCallback(() => {
    const navigationLocale = navigation.getParam('locale', null);
    if (navigationLocale && prevState.locale !== navigationLocale) {
      i18n.locale = navigationLocale;
      changeLocale(navigationLocale);
    }
  }, [changeLocale, navigation, prevState]);

  React.useEffect(() => {
    updateLocale();
  }, [updateLocale]);

  return (
    <Container paddingHorizontal={0} paddingVertical={5}>
      <ScrollView style={styles.scrollView}>
        <View>
          <SettingsList
            t={t}
            locale={locale}
            onPressItem={screen => navigation.navigate(screen, { currentLocale: locale })}
            style={{ marginBottom: 30 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <BodyBold
            onPress={() => {
              firebase.doSignOut();
              navigation.navigate(screens.signIn);
            }}>
            {t('signOut')}
          </BodyBold>
          <BodyBold onPress={() => saveSettings({ locale, dark: theme })}>
            {t('settings.save_button')}
          </BodyBold>
        </View>
      </ScrollView>
    </Container>
  );
};

export default compose(withAppContext())(Settings);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    paddingTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
