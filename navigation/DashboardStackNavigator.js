import { createStackNavigator } from 'react-navigation';
import DashboardTabNavigator from './DashboardTabNavigator';
import { screens } from './constants';

const DashboardStackNavigator = createStackNavigator(
  {
    [screens.dashboardTabNavigator]: {
      screen: DashboardTabNavigator,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  }
);

export default DashboardStackNavigator;
