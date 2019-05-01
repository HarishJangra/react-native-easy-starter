import React, { useState, useEffect } from "react";
import { APP_STATE, STATUS } from "../Constants/index";
import { getLoginCredentials, resetLoginCredentials } from "./Keychain";
import NavigationService from "../Navigation/index";
import Routes from "../Navigation/Routes/index";
import { useActions, useStore } from "easy-peasy";

const AppStateContext = React.createContext();

export const AppContextProvider = props => {
    const [state, setState] = useState(APP_STATE.AUTH);
    
	const loginUser = useActions(actions => actions.login.loginUser);
	const loginStatus = useStore(state => state.login.status);

	async function checkLogin() {
		const credentials = await getLoginCredentials();
		if (credentials) {
			setState(APP_STATE.PRIVATE);
		} else {
			setState(APP_STATE.PUBLIC);
		}
	}

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

	// watch login status
	useEffect(() => {
		console.log("LOG_checkloginstatus", loginStatus);
		if (loginStatus == STATUS.SUCCESS) {
			setState(APP_STATE.PRIVATE);
		}
	}, [loginStatus]);

	// check loggedin on mount
	useEffect(() => {
		console.log("LOG_checklogin effect");
		//cannot call async directly inside effect  react-warning
		checkLogin();
	}, []);

    // app state reactor
	useEffect(() => {
		console.log("LOG_effect state reactor", state);
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
