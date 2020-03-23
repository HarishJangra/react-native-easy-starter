import React from 'react';
import Login from '../Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import AppIntro from '../Screens/AppIntro';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.APP_INTRO}>
      <Stack.Screen name={Routes.APP_INTRO} component={AppIntro} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={Login} />
    </Stack.Navigator>
  );
};
