import {useEffect, useState, useCallback} from 'react';
import CodePush from 'react-native-code-push';
import {CODEPUSH_KEY} from '../Config';
import Toast from 'react-native-tiny-toast';

export const useCodePush = () => {
  const [syncMessage, setSyncMessage] = useState('');
  const [progress, setProgress] = useState(false);
  const [syncStatus, setSyncStatus] = useState();

  const codePushStatusDidChange = useCallback((syncStatus) => {
    setSyncStatus(syncStatus);

    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setSyncMessage('Checking for update');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setSyncMessage('Downloading package');
        //do something
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setSyncMessage('Awaiting user action');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setSyncMessage('Installing update');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        setSyncMessage('App up to date.');
        setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setSyncMessage('Update cancelled by user.');
        // dispatch(StartUpActions.)
        setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setSyncMessage('Update installed and will be applied on restart.');
        Toast.show('Updated installed , Restart app to apply now.');
        setProgress(false);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        setSyncMessage('An unknown error occurred.');
        setProgress(false);
        break;
    }
  }, []);

  const downloadProgressCallback = useCallback((progress) => {
    setProgress(progress);
    let pr = (progress.receivedBytes / progress.totalBytes) * 100;
    console.log('[codepush] progress', progress, pr);
  }, []);

  const checkExtraCodepush = useCallback(async () => {
    const meta = await CodePush.getUpdateMetadata();
    console.log('[codepush] meta', meta);
  }, []);

  const checkCodePush = useCallback(async () => {
    await CodePush.sync(
      {
        deploymentKey: CODEPUSH_KEY,
        installMode: CodePush.InstallMode.ON_NEXT_RESUME,
        updateDialog: {
          title: 'An OTA update is available',
        },
        rollbackRetryOptions: {
          delayInHours: 0.1,
          maxRetryAttempts: 1,
        },
      },
      codePushStatusDidChange,
      downloadProgressCallback,
    );
  }, [codePushStatusDidChange, downloadProgressCallback]);

  return {checkCodePush, checkExtraCodepush, syncStatus, syncMessage, progress};
};

export default () => {
  const {checkCodePush, checkExtraCodepush} = useCodePush();

  useEffect(() => {
    checkExtraCodepush();
  }, [checkExtraCodepush]);

  useEffect(() => {
    checkCodePush();
  }, [checkCodePush]);
};
