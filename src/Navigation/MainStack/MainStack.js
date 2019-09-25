import {createStackNavigator} from 'react-navigation-stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';

export default createStackNavigator(
  {
    [Routes.HOME_TABS]: {
      screen: BottomTabStack,
      path: 'tabs',
    },
    //More stack screens can be defined here only
  },
  {
    // Default config for all screens
    initialRouteName: Routes.HOME_TABS,
  },
);
