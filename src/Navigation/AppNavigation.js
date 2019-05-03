import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import Path from "./Routes";
import LaunchScreen from "../Screens/Launch";
// Screens Objects
import LoginStack from "./LoginStack";
import MainStack from "./MainStack";
import AppStateContext from "../Services/Auth/AppContext";
import { useContext } from "react";
import AppUpdate from "../Screens/AppUpdate";

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

const ModalNav = createStackNavigator(
	{
		Main : PrimaryNav,
		
		AppUpdate :  {
		  screen: AppUpdate,
		},
	},
	  {
		mode: 'modal',
		initialRouteName: "Main",
		headerMode: 'none',
	  }
)

export default createAppContainer(ModalNav);
