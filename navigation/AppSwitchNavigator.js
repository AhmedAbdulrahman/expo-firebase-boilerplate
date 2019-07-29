import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { withTheme } from 'styled-components';
import AppDrawerNavigator from './AppDrawerNavigator';
import { screens } from './constants';
import { SignUp, SignIn } from '@screens';

const AppSwitchNavigator = createStackNavigator({
  [screens.signIn]: SignIn,
  [screens.signUp]: SignUp,
  Dashboard: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

const Navigation = createAppContainer(AppSwitchNavigator);

class AppContainer extends React.Component {
  render() {
    const { theme } = this.props;
    return <Navigation screenProps={{ ...this.props.screenProps, theme }} />;
  }
}

export default withTheme(AppContainer);
