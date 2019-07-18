import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Profile } from '@screens';

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ screenProps: { t, locale } }) => ({
      headerTitle: t('navigation.profile'),
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
});

export default ProfileStack;
