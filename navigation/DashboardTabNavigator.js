import React from 'react';
import { Platform, TouchableWithoutFeedback, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '@components/TabBarIcon';
import TabBar from '@components/TabBar';
import { Label } from '@components/Text';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';
import { screens } from './constants';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    [screens.home]: {
      screen: HomeStack,
    },
    [screens.profile]: {
      screen: ProfileStack,
    },
    [screens.settings]: {
      screen: SettingsStack,
    },
  },
  {
    defaultNavigationOptions: ({ navigation, screenProps: { t } }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      return {
        tabBarIcon: ({ focused }) => {
          switch (routeName) {
            case screens.home:
            case screens.detail: {
              return (
                <TabBarIcon
                  focused={focused}
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle${focused ? '' : '-outline'}`
                      : 'md-information-circle'
                  }
                />
              );
            }
            case screens.profile: {
              return (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                />
              );
            }
            case screens.settings:
            case screens.language: {
              return (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
                />
              );
            }
          }
        },
        tabBarLabel: ({ focused }) => {
          switch (routeName) {
            case screens.home:
            case screens.detail:
              return (
                <Label focused={focused} center>
                  {t('navigation.home')}
                </Label>
              );
            case screens.profile:
              return (
                <Label focused={focused} center>
                  {t('navigation.profile')}
                </Label>
              );
            case screens.settings:
            case screens.language:
              return (
                <Label focused={focused} center>
                  {t('navigation.settings')}
                </Label>
              );
            default:
              return null;
          }
        },
        tabBarComponent: TabBar,
        tabBarOptions: {
          // Feel free to enable/disable option by uncommeting lines below
          // showLabel: false, // hide labels
          // activeTintColor: '#F8F8F8', // active icon color
          // inactiveTintColor: '#586589',  // inactive icon color
          // style: {
          //   // backgroundColor: '#171F33' // Change TabBar background or you can modify TabBar component file
          //   justifyContent: 'center',
          //   textAlign: 'center',
          // },
        },
        tabBarButtonComponent: ({
          children,
          onPress,
          onLongPress,
          testID,
          accessibilityLabel,
          accessibilityRole,
          accessibilityStates,
          ...props
        }) => {
          return (
            <TouchableWithoutFeedback
              onPress={onPress}
              onLongPress={onLongPress}
              testID={testID}
              hitSlop={{ top: 5, right: 15, bottom: 15, left: 15 }}
              accessibilityLabel={accessibilityLabel}
              accessibilityRole={accessibilityRole}
              accessibilityStates={accessibilityStates}>
              <View {...props}>{children}</View>
            </TouchableWithoutFeedback>
          );
        },
      };
    },
  }
);

export default DashboardTabNavigator;
