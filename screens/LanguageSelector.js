import React from 'react';
import { StyleSheet } from 'react-native';
import LanguageListItem from '@components/LanguageListItem';
import Container from '@components/Container';

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
    <Container style={styles.container} marginHorizontal="0">
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
    </Container>
  );
};

LanguageSelector.navigationOptions = ({ screenProps: { t } }) => ({
  title: t('settings.display_language'),
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
export default LanguageSelector;
