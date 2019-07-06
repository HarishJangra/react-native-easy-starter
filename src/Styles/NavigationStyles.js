import { StyleSheet, Platform } from "react-native";
import { isAndroid } from "../Constants";
import metrics from "../Themes/Metrics";
// import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    height: 60
  },
  header_statusBar: {
    ...getHeaderInfo()
  },
  headerTitle: {
    width: (metrics.screenWidth * 2) / 3,
    fontWeight: "300"
  }
});

function getHeaderInfo() {
  return isAndroid && Platform.Version > 20
    ? {
        height: 90,
        elevation: 0,
        paddingTop: 30
      }
    : {
        height: 60
      };
}
