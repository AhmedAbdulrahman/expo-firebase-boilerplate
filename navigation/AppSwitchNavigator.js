import { createAppContainer, createStackNavigator } from 'react-navigation';
import AppDrawerNavigator from './AppDrawerNavigator';
import { screens } from './constants';
import { SignUp, SignIn, Welcome } from '@screens';

const AppSwitchNavigator = createStackNavigator({
  [screens.welcome]: Welcome,
  [screens.signIn]: SignIn,
  [screens.signUp]: SignUp,
  Dashboard: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppSwitchNavigator);
