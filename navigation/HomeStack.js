import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { screens } from './constants';
import { Home, Detail } from '@screens';

const HomeStack = createStackNavigator(
  {
    [screens.home]: {
      screen: Home,
      navigationOptions: ({ screenProps: { t, theme, locale } }) => {
        return {
          headerTitle: t('navigation.home'),
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
    [screens.detail]: {
      screen: Detail,
      navigationOptions: ({ screenProps: { t } }) => {
        return {
          headerTitle: t('navigation.details'),
        };
      },
    },
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme } }) => {
      return {
        gesturesEnabled: false,

        headerStyle: {
          backgroundColor: theme.palette.background.default,
        },
        headerTitleStyle: {
          color: theme.palette.text.primary,
        },
      };
    },
  }
);

export default HomeStack;
