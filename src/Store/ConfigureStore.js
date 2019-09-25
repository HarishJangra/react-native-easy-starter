import {createStore} from 'easy-peasy';

import {composeWithDevTools} from 'remote-redux-devtools';
import {name as appName} from '../../app.json';
import logger from 'redux-logger';

let devTools = composeWithDevTools({
  name: appName,
  realtime: true,
  injectserver: 'react-native',
  trace: true,
});

export default (model, api) => {
  return createStore(model, {
    name: 'easystore',
    /**
     * for api injecting using injections
     */
    injections: {api},
    compose: devTools,
    devTools: true,
    // middleware: [logger]
  });
};
