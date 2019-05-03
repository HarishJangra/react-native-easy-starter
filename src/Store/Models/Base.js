import { action, thunk } from "easy-peasy";
import { ApiService } from "..";
import { STATUS, APP_STATE } from "../../Constants";

const BaseModel = () => (
    {
        status: STATUS.NOT_STARTED,    
        updateStatus: action((state, status) =>{
            state.status = status
        })    
    }
)

export default BaseModel