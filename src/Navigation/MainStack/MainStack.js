import {createStackNavigator} from 'react-navigation-stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';

export default createStackNavigator(
  {
    [Routes.HOME_TABS]: {
      screen: BottomTabStack,
      path: 'tabs',
    },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Routes.HOME_TABS,
  },
);
