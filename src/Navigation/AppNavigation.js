import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isMountedRef} from './index';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Routes from './Routes';
import LaunchScreen from '../Screens/Launch';
// Screens Objects
import LoginStack from './LoginStack';
import MainStack from './MainStack';
import {useAppContext} from '../Services/Auth/AppContext';
import {APP_STATE} from '../Constants';

export default function RootNavigation(props) {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  const {state} = useAppContext();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {state === APP_STATE.PRIVATE ? (
          <Stack.Screen name={Routes.MAIN_APP} component={MainStack} />
        ) : state === APP_STATE.PUBLIC ? (
          <Stack.Screen name={Routes.LOGIN_STACK} component={LoginStack} />
        ) : (
          <Stack.Screen name={Routes.LOADING} component={LaunchScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
