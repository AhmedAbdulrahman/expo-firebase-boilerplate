import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Settings } from '@screens';

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: 'Settings',
      headerLeft: MenuDrawerButton,
    },
  },
});

export default SettingsStack;
