import { action, thunk } from "easy-peasy";
import { STATUS, APP_STATE } from "../../Constants";

const BaseModel = () => ({
  status: STATUS.NOT_STARTED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
  mergeState: action((state, extra) => {
    Object.assign(state, extra);
  })
});

export default BaseModel;
