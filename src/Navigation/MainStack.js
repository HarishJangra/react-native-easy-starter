import { createStackNavigator } from "react-navigation";
import Path from "./Routes";
import Home from "../Screens/App";
import Screen2 from '../Screens/Screen2'

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: Home,		
		},
		Screen2,		
	},
	{
		// Default config for all screens
		headerMode: "float",
		initialRouteName: Path.HOME_SCREEN,
		headerLayoutPreset: "center"
	}
);
