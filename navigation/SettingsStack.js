import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Settings, LanguageSelector, About } from '@screens';

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ screenProps: { t, locale } }) => ({
      headerTitle: t('navigation.settings'),
      ...(locale === 'ar'
        ? {
            headerRight: <MenuDrawerButton />,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          }
        : {
            headerLeft: <MenuDrawerButton />,
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
          }),
      // headerLeft: locale === 'en' ? <MenuDrawerButton /> : null,
      // headerRight: locale === 'ar' ? <MenuDrawerButton /> : null,
    }),
  },
  LanguageSelector: LanguageSelector,
  About: About,
});

export default SettingsStack;
