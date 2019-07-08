import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
// import CodePush from "react-native-code-push";
import { STATUS } from "../Constants";
import NavigationService from "../Navigation/index";

export default () => {
  const checkAppVersion = useStoreActions(
    actions => actions.app.checkAppVersion
  );

  const { status, version } = useStoreState(state => ({
    status: state.app.status,
    version: state.app.version
  }));

  // codepush app version
  // CodePush.sync()

  useEffect(() => {
    status !== STATUS.SUCCESS && checkAppVersion();
  }, []);

  useEffect(() => {
    console.log("LOG_version reactor", version);
    //do whaterver on version check
  }, [version]);

  return version;
};
