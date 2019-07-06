/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import _ from "lodash";
// global._ = _;

import React from "react";
import { StyleSheet, Platform } from "react-native";
import Root from "./App";

// USING CLASS COMPONENT AS A WORKAROUND FOR HOT RELOADING
export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
