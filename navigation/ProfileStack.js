import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { screens } from './constants';
import { Profile } from '@screens';

const ProfileStack = createStackNavigator(
  {
    [screens.profile]: {
      screen: Profile,
    },
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme, locale, t } }) => {
      return {
        gesturesEnabled: false,
        headerTitle: t('navigation.profile'),
        headerStyle: {
          backgroundColor: theme.palette.background.default,
        },
        headerTitleStyle: {
          color: theme.palette.text.primary,
        },
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
  }
);

export default ProfileStack;
