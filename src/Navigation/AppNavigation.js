import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Path from "./Routes";
import LaunchScreen from "../Screens/Launch";
// Screens Objects
import LoginStack from "./LoginStack";
import MainStack from "./MainStack";
import AppStateContext from "../Services/AppContext";
import { useContext } from "react";

const Root = { screen: LaunchScreen };

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
	{
		[Path.MAIN_APP]: MainStack,
		[Path.LOGIN_STACK]: LoginStack,
		[Path.LOADING]: Root
	},
	{
		// Default config for all screens
		headerMode: "none",
		initialRouteName: Path.LOADING,
		navigationOptions: {
			// headerStyle: styles.header
		}
	}
);

export default createAppContainer(PrimaryNav);
