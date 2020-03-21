/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src';
import {YellowBox} from 'react-native';
// import App from "./src605";

import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Require cycle:',
  'Remote debugger',
  'Accessing view manager configs',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillMount',
]);

// import "./debugmodules";

AppRegistry.registerComponent(appName, () => App);
