import { createStackNavigator } from 'react-navigation';
import DashboardTabNavigator from './DashboardTabNavigator';
import MenuDrawer from '@components/MenuDrawer';

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerLeft: MenuDrawer,
    },
  }
);

export default DashboardStackNavigator;
