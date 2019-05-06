import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";
import { APP_STATE } from '../../Constants/index';
import BaseModel from "./Base";
import { showErrorToast, showLoading } from "../../Lib/Toast";

const loginUser = thunk(async (actions, payload) => {
	if(!payload.username || !payload.password ) {
		return;
	}

	actions.updateStatus(STATUS.FETCHING)	
	let response = await ApiService.loginUser(payload);
	
	if(response.ok){			
	
		actions.updateStatus( STATUS.SUCCESS)
		actions.changeAppState(APP_STATE.PRIVATE)

		await setLoginCredentials(
			payload.username,
			payload.password
		);

	}else {
		 showErrorToast("Error in login , Please check your login credentials !")

		actions.updateStatus(STATUS.FAILED)
	}

	// mocking our api
	// setTimeout(() => {
	// 	actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED)
	// 	if (!response.status) {
	// 		console.warn(response.error);
	// 	}else {
	// 		actions.changeAppState(APP_STATE.PRIVATE)	
	// 	}
	// }, 1000);
});

const LoginModel = {
	//include BaseModel 
	...BaseModel(),
	//include all thunks or actions defined separately	
	loginUser,
	appstate: APP_STATE.UNKNOWN,
	changeAppState:action((state, payload)=> {
		state.appstate = payload
	}),
	onLoginInputChange: action((state, { key, value }) => {
		state[key] = value;
	}),
	
};

export default LoginModel;
