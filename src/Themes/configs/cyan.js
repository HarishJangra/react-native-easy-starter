import { DefaultTheme } from "react-native-paper";
import colors from "../Colors";

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.pineapple,
    accent: colors.musturd,
    background: colors.issabeline,
    text: colors.panegrey,
    placeholder: colors.ashgrey,
    header: colors.deepkamaru,
    headerTitle: colors.white,

    //react-native-paper theme colors
    surface: colors.white,
    primaryText: colors.darkgunmetal
  }
};

export default theme;
