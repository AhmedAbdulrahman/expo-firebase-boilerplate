import React from 'react';
import { View, StyleSheet } from 'react-native';
import LanguageListItem from '@components/LanguageListItem';

const languages = [
  {
    locale: 'en',
    name: 'English',
  },
  {
    locale: 'ar',
    name: 'العربية',
    englishName: 'Arabic',
  },
  {
    locale: 'tr',
    name: 'Turkçe',
    englishName: 'Turkish',
  },
];

const LanguageSelector = ({ navigation, screenProps: { t } }) => {
  const currentLocale = navigation.getParam('currentLocale');
  return (
    <View style={styles.container}>
      {languages.map(language => (
        <LanguageListItem
          key={language.locale}
          isActive={language.locale === currentLocale}
          locale={language.locale}
          t={t}
          name={language.name}
          englishName={language.englishName}
          onChangeLocale={locale => navigation.navigate('Settings', { locale })}
        />
      ))}
    </View>
  );
};

LanguageSelector.navigationOptions = ({ screenProps: { t } }) => ({
  title: t('settings.display_language'),
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
export default LanguageSelector;
