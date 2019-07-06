import { StyleSheet } from "react-native";
import colors from "../Themes/Colors";
import metrics from "../Themes/Metrics";

const viewStyles = StyleSheet.create({
  container: {
    flex: 1
  },

  section: {
    padding: metrics.s20
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  },

  rowSpread: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  center: {
    alignItems: "center",
    justifyContent: "center"
  },

  justifyCenter: {
    justifyContent: "center"
  }
});

export default viewStyles;
