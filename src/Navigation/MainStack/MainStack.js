import { createStackNavigator } from "react-navigation";
import Home from "../../Screens/Home";
import BottomTabStack from "./BottomStack";
import NavigationStyles from "../../Styles/NavigationStyles";
import metrics from "../../Themes/Metrics";
import Routes from "../Routes";

export default createStackNavigator(
  {
    [Routes.HOME_TABS]: {
      screen: BottomTabStack,
      path: "tabs"
    }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: Routes.HOME_TABS
  }
);
