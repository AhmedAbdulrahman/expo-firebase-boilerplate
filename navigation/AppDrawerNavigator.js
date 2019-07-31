import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import DashboardStackNavigator from './DashboardStackNavigator';
import SideBar from '@components/SideBar';
import { screens } from './constants';
import i18n from '@i18n';

const AppDrawerNavigator = createDrawerNavigator(
  {
    [screens.dashboard]: {
      screen: DashboardStackNavigator,
    },
  },
  {
    ...(i18n.locale === 'ar' ? { drawerPosition: 'right' } : { drawerPosition: 'left' }),
    contentComponent: SideBar,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 90,
    navigationOptions: {
      header: null,
    },
  }
);

export default AppDrawerNavigator;
