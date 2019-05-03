import { create } from "apisauce";
import { BASE_URL } from "../../Config";
import apiMonitor from "./Monitor";
import { Platform } from "react-native";

const URIS = {
	VERSION: "app/version",
	LOGIN: "clients/api/login",
	REFRESH: "clients/api/refresh",
	LOGOUT: "logout"
};

const createApiClient = (baseURL = BASE_URL) => {
	let api = create({
		baseURL,
		headers: {
			Accept: "application/json",
			"Cache-Control": "no-cache",
			"Content-Type": "application/json"
		},
		timeout: 15000
	});

	// add monitor for logging api response
	api.addMonitor(apiMonitor);

	// const setAuthorizationHeader = access_token =>
	// 	api.setHeader("Authorization", "Bearer " + access_token);


	const loginUser = payload => api.post(URIS.LOGIN, payload);
	//kickoff our api functions
	return {
		// client modifiers
		// setAuthorizationHeader,
		// api call functions
		// checkAppVersion,
		loginUser
	};
};

export default { createApiClient };
