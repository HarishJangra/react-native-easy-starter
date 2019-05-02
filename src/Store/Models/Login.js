import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";
import { APP_STATE } from '../../Constants/index';

const loginUser = thunk(async (actions, payload) => {
	// let response = await ApiService.loginUser(payload);
	actions.updateLoadingState({
		status: STATUS.FETCHING
	});

	let response = await setLoginCredentials(
		payload.username,
		payload.password
	);

	// mocking our api
	setTimeout(() => {
		if (!response.status) {
			console.error(response.error);
		}else {
			actions.changeAppState(APP_STATE.PRIVATE)	
		}
		actions.updateLoadingState({
			status: response.status ? STATUS.SUCCESS : STATUS.FAILED
		});
		
	}, 1000);
});

const LoginModel = {
	//include all thunks or actions defined separately
	loginUser,
	appstate: APP_STATE.UNKNOWN,
	changeAppState:action((state, payload)=> {

		state.appstate = payload
	}),
	onLoginInputChange: action((state, { key, value }) => {
		state[key] = value;
	}),
	updateLoadingState: action((state, payload) => {
		_.merge(state, payload);
	})
};

export default LoginModel;
