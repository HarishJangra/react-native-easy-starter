import { DefaultTheme } from "react-native-paper";
import colors from "../Colors";

const theme = {
	...DefaultTheme,
	dark: false,
	roundness: 5,
	colors: {
		...DefaultTheme.colors,
		primary: colors.mystic,
		accent: "#99C24D",
		background: "#fafafa",
		header: "#ffffff"
	}
};

export default theme;
