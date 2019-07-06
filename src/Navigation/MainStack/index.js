import { createDrawerNavigator } from "react-navigation";
import Routes from "../Routes";
import metrics from "../../Themes/Metrics";
import MainStack from "./MainStack";
import Drawer from "../../Screens/Drawer";

const DrawerStack = createDrawerNavigator(
  {
    [Routes.HOME_STACK]: MainStack
  },
  {
    drawerWidth: metrics.drawerWidth,
    drawerBackgroundColor: "transparent",
    drawerType: "slide",
    contentComponent: Drawer,
    style: {
      padding: 0
    },
    edgeWidth: 10,
    contentOptions: {
      itemStyle: {
        marginTop: 30
      }
    }
  }
);

export default DrawerStack;
