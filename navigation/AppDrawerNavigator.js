import { createDrawerNavigator } from 'react-navigation';
import DashboardStackNavigator from './DashboardStackNavigator';

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

export default AppDrawerNavigator;
