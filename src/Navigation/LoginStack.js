import Login from "../Screens/Login";
import { createStackNavigator } from "react-navigation";
import Path from "./Routes";

export default createStackNavigator(
	{
		[Path.LOGIN_SCREEN]: { screen: Login }
	},
	{
		// Default config for all screens
		headerMode: "none",
		initialRouteName: Path.LOGIN_SCREEN
	}
);
