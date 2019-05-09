import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { STATUS, APP_STATE } from "../../Constants";
import BaseModel from "./Base";
import { showLoading, hideLoading } from "../../Lib/Toast";

const requestUserProfile = thunk( async (actions,  payload, {dispatch, injections }) => {
    const {api} = injections 
    actions.updateStatus(STATUS.FETCHING)          
     showLoading("Getting Data")
        let response = await api.profileRequest();
    //  if(response.ok){     
        // actions.setVersion(9)
        dispatch.login.changeAppState(APP_STATE.PRIVATE)
        actions.updateStatus(STATUS.SUCCESS)
        hideLoading()

    //  }


})

const AppModel ={
    ...BaseModel(),
    requestUserProfile,    
}

export default AppModel