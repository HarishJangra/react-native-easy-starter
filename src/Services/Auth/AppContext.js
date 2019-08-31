import React, {useEffect, useCallback} from 'react';
import {Alert} from 'react-native';
import {APP_STATE} from '../../Constants';
import {resetLoginCredentials} from '../Keychain';
import NavigationService, {Routes} from '../../Navigation';
import {useStoreActions, useStoreState} from 'easy-peasy';
import useCheckVersion from '../CheckVersion';

const AppStateContext = React.createContext();

export const AppContextProvider = props => {
  const {loginUser, setState, checkLogin} = useStoreActions(actions => ({
    loginUser: actions.login.loginUser,
    setState: actions.login.changeAppState,
    checkLogin: actions.login.checkLogin,
  }));
  useCheckVersion();
  const state = useStoreState(store => store.login.appstate);

  const _logoutUser = useCallback(async () => {
    const reset = resetLoginCredentials();
    if (reset) {
      // do logout
      setState(APP_STATE.PUBLIC);
    }
  }, [setState]);

  const logout = useCallback(() => {
    Alert.alert(
      'Please comfirm Logout',
      'Are you sure you want to logout from the app',
      [
        {
          text: 'Yes, Logout',
          onPress: _logoutUser,
        },
        {
          type: 'cancel',
          text: 'No, Stay here',
        },
      ],
    );
  }, [_logoutUser]);

  const login = useCallback(
    reqData => {
      loginUser(reqData);
    },
    [loginUser],
  );

  // check loggedin on mount
  useEffect(() => {
    state == APP_STATE.UNKNOWN && checkLogin();
  }, [checkLogin, state]);

  // app state reactor
  useEffect(() => {
    if (state == APP_STATE.PRIVATE) {
      NavigationService.navigate(Routes.MAIN_APP);
    } else if (state == APP_STATE.PUBLIC) {
      NavigationService.navigate(Routes.LOGIN_STACK);
    } else {
      //do something if needed
    }
  }, [state]);

  return (
    <AppStateContext.Provider
      value={{
        state,
        logout,
        login,
      }}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
