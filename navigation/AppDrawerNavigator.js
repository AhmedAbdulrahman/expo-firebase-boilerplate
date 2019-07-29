import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import DashboardStackNavigator from './DashboardStackNavigator';
import SideBar from '@components/SideBar';
import i18n from '@i18n';

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator,
    },
  },
  {
    ...(i18n.locale === 'ar' ? { drawerPosition: 'right' } : { drawerPosition: 'left' }),
    contentComponent: SideBar,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 90,
  }
);

export default AppDrawerNavigator;
