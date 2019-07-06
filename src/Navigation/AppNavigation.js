import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

import Routes from "./Routes";
import LaunchScreen from "../Screens/Launch";
// Screens Objects
import LoginStack from "./LoginStack";
import MainStack from "./MainStack";
import AppUpdate from "../Screens/AppUpdate";

const Root = { screen: LaunchScreen };

// Manifest of possible screens
const PrimaryNav = createAnimatedSwitchNavigator(
  {
    [Routes.MAIN_APP]: {
      screen: MainStack,
      path: "home"
    },
    [Routes.LOGIN_STACK]: { screen: LoginStack, path: "login" },
    [Routes.LOADING]: Root
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={200} />
      </Transition.Together>
    ),
    // Default config for all screens
    headerMode: "none",
    initialRouteName: Routes.LOADING
  }
);

const ModalNav = createStackNavigator(
  {
    Main: {
      screen: PrimaryNav,
      path: "app"
    },

    AppUpdate: {
      screen: AppUpdate,
      path: "update"
    }
  },
  {
    mode: "modal",
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default createAppContainer(ModalNav);
