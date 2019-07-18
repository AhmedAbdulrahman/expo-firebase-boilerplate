import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Home, Detail } from '@screens';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ screenProps: { t, locale } }) => ({
        headerTitle: t('navigation.home'),
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
      }),
    },
    Detail: {
      screen: Detail,
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default HomeStack;
