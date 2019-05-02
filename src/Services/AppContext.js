import React, { useState, useEffect } from "react";
import { APP_STATE, STATUS } from "../Constants/index";
import { getLoginCredentials, resetLoginCredentials } from "./Keychain";
import NavigationService from "../Navigation/index";
import Routes from "../Navigation/Routes/index";
import { useActions, useStore } from "easy-peasy";

const AppStateContext = React.createContext();

export const AppContextProvider = props => {
    // const [state, setState] = useState(APP_STATE.AUTH);
    
	const {loginUser, setState} = useActions(actions => (
		{
			loginUser : actions.login.loginUser, 
			setState : actions.login.changeAppState
		}
	));

	const  state = useStore(state => state.login.appstate);


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
