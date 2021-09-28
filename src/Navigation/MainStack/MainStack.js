import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.HOME_TABS}
        options={{headerShown: false}}
        component={BottomTabStack}
      />
    </Stack.Navigator>
  );
};
