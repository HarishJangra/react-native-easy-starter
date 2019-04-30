import { createStackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import Path from "./Routes";
import Home from "../Screens/App";

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: Home,
			navigationOptions: {
				headerStyle: styles.header,
				headerTitle: "HOME",
				headerTitleStyle: {
					color: "white",
					width: 100,
					fontWeight: "800"
				}
			}
		}
	},
	{
		// Default config for all screens
		headerMode: "float",
		initialRouteName: Path.HOME_SCREEN,
		headerLayoutPreset: "center"
	}
);
