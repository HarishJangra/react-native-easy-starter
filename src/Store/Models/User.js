import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { STATUS, APP_STATE } from "../../Constants";
import BaseModel from "./Base";

const requestUserProfile = thunk( async (actions,  payload, {dispatch}) => {
     actions.updateStatus(STATUS.FETCHING)          
     let response = await ApiService.profileRequest();
    //  if(response.ok){     
        // actions.setVersion(9)
        dispatch.login.changeAppState(APP_STATE.PRIVATE)
        actions.updateStatus(STATUS.SUCCESS)
    //  }
})

const AppModel ={
    ...BaseModel(),
    requestUserProfile,    
}

export default AppModel