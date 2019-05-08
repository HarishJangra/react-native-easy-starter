import React, { useState, useEffect } from "react";
import { APP_STATE, STATUS } from "../../Constants";
import { getLoginCredentials, resetLoginCredentials } from "../Keychain";
import NavigationService from "../../Navigation";
import Routes from "../../Navigation/Routes";

import { useActions, useStore } from "easy-peasy";
import useCheckVersion from '../CheckVersion'
import { ApiService } from '../../Store';
import { showLoading, hideLoading } from "../../Lib/Toast";

const AppStateContext = React.createContext();

export const AppContextProvider = props => {    
	
	const {loginUser, setState, profileRequest, checkLogin} = useActions(actions => (
		{
			loginUser : actions.login.loginUser, 
			setState : actions.login.changeAppState,
			profileRequest: actions.user.requestUserProfile,	
			checkLogin: actions.login.checkRefreshToken		
		}
	));
	const version = useCheckVersion() 
	const  state = useStore(state => state.login.appstate);

	async function logout() {
		const reset = resetLoginCredentials();
		if (reset) {
			// do logout
			setState(APP_STATE.PUBLIC);
		}
	}

	function login(reqData) {
		loginUser(reqData);
	}

	// check loggedin on mount
	useEffect(() => {
		console.log("LOG_checklogin effect");
		//cannot call async directly inside effect  react-warning
		state == APP_STATE.UNKNOWN &&  checkLogin();
	}, []);

    // app state reactor
	useEffect(() => {
		console.log("LOG_effect state reactor", state);

		if (state == APP_STATE.PRIVATE) {	
			profileRequest()	
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
