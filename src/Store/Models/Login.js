import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials, getLoginCredentials, resetLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";
import { APP_STATE } from '../../Constants/index';
import BaseModel from "./Base";
import {minutesSinceTime} from '../../Utils/DateHelper'
import { showErrorToast, showLoading } from "../../Lib/Toast";


const checkRefreshToken = thunk(async(actions , payload , {injections}) => {
	const {api} = injections

	const credentials = await getLoginCredentials();
	if (credentials) {
		const prev = credentials.timestamp
		const minutes = minutesSinceTime(prev)

			if(minutes >= 1350){
				console.log('LOG_need to refresh', minutes);
				const response = await api.refreshUser(credentials.refresh_token)		
				if(response.ok){
					api.setAuthorizationHeader(response.data.access_token)		
					actions.changeAppState(APP_STATE.PRIVATE);		

					await setLoginCredentials(
						JSON.stringify(response.data)
				   );
		   
				}else {
					console.log('LOG_not refreshed', respone.problem);					

					await resetLoginCredentials()
					actions.changeAppState(APP_STATE.PUBLIC);
				}
			}else {
				api.setAuthorizationHeader(credentials.access_token)
				actions.changeAppState(APP_STATE.PRIVATE);		
			}
	} else {
		actions.changeAppState(APP_STATE.PUBLIC);
	}
})

const loginUser = thunk(async (actions, payload , {dispatch}) => {
	if(!payload.username || !payload.password ) {
		return;
	}
	actions.updateStatus(STATUS.FETCHING)	
	let response = await ApiService.loginUser(payload);
	
	if(response.ok){			
		actions.updateStatus( STATUS.SUCCESS)
		ApiService.setAuthorizationHeader(response.data.access_token)		
		dispatch.user.requestUserProfile()
		await setLoginCredentials(
			 JSON.stringify(response.data)
		);
	}else {
		 showErrorToast("Error in login , Please check your login credentials !")
		 actions.updateStatus(STATUS.FAILED)
	}
});

const LoginModel = {
	//include BaseModel 
	...BaseModel(),
	//include all thunks or actions defined separately	
	loginUser,
	checkRefreshToken,
	appstate: APP_STATE.UNKNOWN,
	changeAppState:action((state, payload)=> {
		state.appstate = payload
	}),	
	onLoginInputChange: action((state, { key, value }) => {
		state[key] = value;
	}),
	
};

export default LoginModel;
