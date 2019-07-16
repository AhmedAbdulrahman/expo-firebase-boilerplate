import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Home, Detail } from '@screens';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        headerLeft: MenuDrawerButton,
      },
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
