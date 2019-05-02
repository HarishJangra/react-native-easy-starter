import { createStore } from "easy-peasy";

import { composeWithDevTools } from "remote-redux-devtools";
import { name as appName } from "../../app.json";

let devTools = composeWithDevTools({
	name: appName,
	realtime: true,
	hostname:'192.168.0.150',
	port:8081,
	trace: true
});

export default (model, api) => {
	return createStore(model, {
		/**
		 * for api injecting using injections
		 * injections: { api },
		 */
		compose: devTools
	});
};
