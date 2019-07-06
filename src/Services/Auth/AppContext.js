import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { APP_STATE, STATUS } from "../../Constants";
import { getLoginCredentials, resetLoginCredentials } from "../Keychain";
import NavigationService, { Routes } from "../../Navigation";
import { useStoreActions, useStoreState } from "easy-peasy";
import useCheckVersion from "../CheckVersion";
import { showLoading, hideLoading } from "../../Lib/Toast";

const AppStateContext = React.createContext();

export const AppContextProvider = props => {
  const { loginUser, setState, profileRequest, checkLogin } = useStoreActions(
    actions => ({
      loginUser: actions.login.loginUser,
      setState: actions.login.changeAppState,
      checkLogin: actions.login.checkLogin
    })
  );
  const version = useCheckVersion();
  const state = useStoreState(state => state.login.appstate);

  async function _logoutUser() {
    const reset = resetLoginCredentials();
    if (reset) {
      // do logout
      setState(APP_STATE.PUBLIC);
    }
  }

  function logout() {
    Alert.alert(
      "Please comfirm Logout",
      "Are you sure you want to logout from the app",
      [
        {
          text: "Yes, Logout",
          onPress: _logoutUser
        },
        {
          type: "cancel",
          text: "No, Stay here"
        }
      ]
    );
  }

  function login(reqData) {
    loginUser(reqData);
  }

  // check loggedin on mount
  useEffect(() => {
    state == APP_STATE.UNKNOWN && checkLogin();
  }, []);

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
        login
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
