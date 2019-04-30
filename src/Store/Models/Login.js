import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";

const loginUser = thunk(async (actions, payload) => {
	// let response = await ApiService.loginUser(payload);
	actions.updateState({
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
		}
		actions.updateState({
			status: response.status ? STATUS.SUCCESS : STATUS.FAILED
		});
	}, 1000);
});

const LoginModel = {
	//include all thunks or actions defined separately
	loginUser,
	onLoginInputChange: action((state, { key, value }) => {
		state[key] = value;
	}),
	updateState: action((state, payload) => {
		_.merge(state, payload);
	})
};

export default LoginModel;
