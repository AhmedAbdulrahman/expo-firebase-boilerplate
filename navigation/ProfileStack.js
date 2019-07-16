import { createStackNavigator } from 'react-navigation';
import MenuDrawerButton from '@components/MenuDrawerButton';
import { Profile } from '@screens';

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
      headerLeft: MenuDrawerButton,
    },
  },
});

export default ProfileStack;
