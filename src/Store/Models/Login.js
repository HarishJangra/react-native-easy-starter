import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";
import { APP_STATE } from '../../Constants/index';
import BaseModel from "./Base";

const loginUser = thunk(async (actions, payload) => {
	// let response = await ApiService.loginUser(payload);
	actions.updateStatus(STATUS.FETCHING)
	let response = await setLoginCredentials(
		payload.username,
		payload.password
	);

	// mocking our api
	setTimeout(() => {
		actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED)		

		if (!response.status) {
			console.warn(response.error);
		}else {
			actions.changeAppState(APP_STATE.PRIVATE)	
		}
	}, 1000);
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
