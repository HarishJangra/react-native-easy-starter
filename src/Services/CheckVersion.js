import React, {useEffect, useState, useCallback} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import CodePush from 'react-native-code-push';
import {STATUS} from '../Constants';
import {showInfoToast} from '../Lib/Toast';

export default () => {
  const [syncMessage, setMessage] = useState('');
  const [progress, setProgress] = useState(true);

  const setSyncMessage = useCallback(message => {
    // setMessage(syncMessage + '\n' + message);
    // showInfoToast(syncMessage + '\n' + message);
  }, []);

  const checkAppVersion = useStoreActions(
    actions => actions.app.checkAppVersion,
  );

  const {status, version} = useStoreState(state => ({
    status: state.app.status,
    version: state.app.version,
  }));

  const codePushStatusDidChange = useCallback(
    syncStatus => {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          setSyncMessage('Checking for update');
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          setSyncMessage('Downloading package');
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
          setProgress(false);
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          setSyncMessage('Update installed and will be applied on restart.');
          setProgress(false);
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          setSyncMessage('An unknown error occurred.');
          setProgress(false);
          break;
      }
    },
    [setSyncMessage],
  );

  // console.log(`[CodePush] message ${syncMessage}`);

  const downloadProgressCallback = useCallback(progress => {
    setProgress(progress);
    console.log('[codepush] progress', progress);
  }, []);

  useEffect(() => {
    console.log('[version] checkversion');
    checkAppVersion();
  }, [checkAppVersion]);

  const checkExtraCodepush = useCallback(async () => {
    const meta = await CodePush.getUpdateMetadata();
    console.log('[codepush] meta', meta);
  }, []);

  useEffect(() => {
    CodePush.notifyAppReady();
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.ON_NEXT_RESTART,
        updateDialog: {
          title: 'An OTA update is available',
          description: 'Would you like to install it?',
        },
        rollbackRetryOptions: {
          delayInHours: 0.1,
          maxRetryAttempts: 1,
        },
      },
      codePushStatusDidChange,
      downloadProgressCallback,
    );

    checkExtraCodepush();
  }, [checkExtraCodepush, codePushStatusDidChange, downloadProgressCallback]);

  useEffect(() => {
    console.log('LOG_version reactor', version);
    //do whaterver on version check
  }, [version]);

  return version;
};
