import { createStackNavigator } from 'react-navigation';
import DashboardTabNavigator from './DashboardTabNavigator';
import MenuDrawer from '@components/MenuDrawer';

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashboardTabNavigator,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        // headerRight: MenuDrawer,
        headerTitle: routeName,
      };
    },
  }
);

export default DashboardStackNavigator;
