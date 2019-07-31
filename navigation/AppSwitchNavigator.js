import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { withTheme } from 'styled-components';
import AppDrawerNavigator from './AppDrawerNavigator';
import { screens } from './constants';
import { SignUp, SignIn, AuthLoading } from '@screens';

const AppSwitchNavigator = createStackNavigator(
  {
    [screens.signIn]: SignIn,
    [screens.signUp]: SignUp,
    [screens.dashboard]: AppDrawerNavigator,
    [screens.authLoading]: AuthLoading,
  },
  {
    initialRouteName: screens.authLoading,
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  }
);

const Navigation = createAppContainer(AppSwitchNavigator);

class AppContainer extends React.Component {
  render() {
    const { theme } = this.props;
    return <Navigation screenProps={{ ...this.props.screenProps, theme }} />;
  }
}

export default withTheme(AppContainer);
