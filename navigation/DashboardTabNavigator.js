import React from 'react';
import { Platform, TouchableWithoutFeedback, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '@components/TabBarIcon';
import TabBar from '@components/TabBar';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'My Bookmarks',
        headerTitle: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
        ),
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
          />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarButtonComponent: ({
      children,
      onPress,
      onLongPress,
      testID,
      accessibilityLabel,
      accessibilityRole,
      accessibilityStates,
      ...props
    }: any) => {
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
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  }
);

export default DashboardTabNavigator;
