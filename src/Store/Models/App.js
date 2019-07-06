import { action, thunk } from "easy-peasy";
import { STATUS, APP_STATE } from "../../Constants";
import BaseModel from "./Base";

const checkAppVersion = thunk(async (actions, payload, { injections }) => {
  const { api } = injections;

  actions.updateStatus(STATUS.FETCHING);
  // let response = await api.checkAppVersion();
  // if (response.ok) {
  // let version = 9;
  // actions.setVersion(version);
  // }
  actions.updateStatus(STATUS.SUCCESS);
});

const AppModel = {
  ...BaseModel(),
  checkAppVersion,
  setVersion: action((state, version) => {
    state.version = version;
  })
};

export default AppModel;
