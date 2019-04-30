import { create } from "apisauce";
import { BASE_URL } from "../../Config";

const URIS = {
	LOGIN: "clients/api/login",
	REFRESH: "clients/api/refresh",
	LOGOUT: "logout"
};

const apiMonitor = response => {
	response.ok
		? console.log(
				"%c API_RESPONSE! %c" + response.config.url,
				"background: #222; color: #bada55; font-size:16px",
				"background:red;color:white;"
		  )
		: console.log(
				"%c API_RESPONSE! %c" + response.config.url,
				"background: #222; color: #ff7788; font-size:16px",
				"background:red;color:white;"
		  );
	console.log(response);
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
		loginUser
	};
};

export default { createApiClient };
