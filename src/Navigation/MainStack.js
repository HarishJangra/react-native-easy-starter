import { createStackNavigator } from "react-navigation";
import Path from "./Routes";
import Home from "../Screens/App";

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: Home,		
		},
	},
	{
		// Default config for all screens
		headerMode: "float",
		initialRouteName: Path.HOME_SCREEN,
		headerLayoutPreset: "center"
	}
);
