import { create } from "apisauce";
import { BASE_URL } from "../../Config";
import apiMonitor from "./Monitor";
import { Platform } from "react-native";
import setInterceptor from "./Interceptor";

export const URIS = {
	VERSION: "app/version",
	LOGIN: "clients/api/login",
	REFRESH: "clients/api/refresh",
	LOGOUT: "logout",
	USER_PROFILE: "user/profile",
	UPDATE_FCM_TOKEN: "user/update"
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
	setInterceptor(api);

	const setAuthorizationHeader = access_token => {
		api.setHeader("Authorization", "Bearer " + access_token);
		console.log("LOG_setAccessToken");
	};

	const checkAppVersion = (os = Platform.OS, app = "parent") => {
		console.log("LOG_request", URIS.VERSION, { os, app });
		api.get(URIS.VERSION, { os, app });
	};
	const loginUser = payload => api.post(URIS.LOGIN, payload);

	const refreshUser = refresh_token =>
		api.post(
			URIS.REFRESH,
			{ refresh_token },
			{ headers: { _retry: true } }
		);

	const profileRequest = () =>
		api.get(URIS.USER_PROFILE, { include: "studentsWithSchool,fcm,roles" });

	//kickoff our api functions
	return {
		// client modifiers
		setAuthorizationHeader,
		// api call functions
		checkAppVersion,
		loginUser,
		refreshUser,
		profileRequest
	};
};

export default { createApiClient };
