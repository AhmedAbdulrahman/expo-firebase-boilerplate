import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { screens } from './constants';
import { Settings, LanguageSelector, About } from '@screens';

const SettingsStack = createStackNavigator(
  {
    [screens.settings]: {
      screen: Settings,
      navigationOptions: ({ screenProps: { locale, theme } }) => {
        return {
          ...(locale === 'ar'
            ? {
                headerRight: <MenuDrawerButton color={theme.palette.text.primary} />,
                headerRightContainerStyle: {
                  paddingRight: 10,
                },
              }
            : {
                headerLeft: <MenuDrawerButton color={theme.palette.text.primary} />,
                headerLeftContainerStyle: {
                  paddingLeft: 10,
                },
              }),
        };
      },
    },
    [screens.language]: {
      screen: LanguageSelector,
      navigationOptions: ({ screenProps: { t } }) => {
        return {
          headerTitle: t('settings.display_language'),
        };
      },
    },
    About: {
      screen: About,
      navigationOptions: ({ screenProps: { t } }) => {
        return {
          headerTitle: t('settings.about'),
        };
      },
    },
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme, locale, t } }) => {
      return {
        gesturesEnabled: false,
        headerTitle: t('navigation.settings'),
        headerStyle: {
          backgroundColor: theme.palette.background.default,
          textAlign: 'center',
        },
        headerTitleStyle: {
          color: theme.palette.text.primary,
        },
      };
    },
  }
);

export default SettingsStack;
