import { createStackNavigator } from "react-navigation";
import Path from "./Routes";
import Home from "../Screens/Home";
import BottomTabStack from "./BottomTabStack";
import NavigationStyles from "../Styles/NavigationStyles";
import metrics from "../Themes/Metrics";
import Routes from "./Routes";

export default createStackNavigator(
	{
		[Path.HOME_TABS]: {
			screen: BottomTabStack,
			path:"tabs"
		}
	},
	{
		// Default config for all screens
		headerMode: "none",
		initialRouteName: Path.HOME_TABS,
		headerLayoutPreset: "center",
	}
);

const getCurrentRoute = (navigationState) => {
    if (!navigationState) {
        return null
    } else if (!navigationState.routes) {
        return navigationState
    }

    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
        return getCurrentRoute(route)
    }

    return route
}
