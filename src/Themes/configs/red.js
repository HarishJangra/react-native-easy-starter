import { DefaultTheme } from "react-native-paper";

const theme = {
	...DefaultTheme,
	dark: false,
	roundness: 10,
	colors: {
		...DefaultTheme.colors,
		primary: "red",
		accent: "yellow",
		background: "#fafafa",
		text: "#2a2a2a"
	}
};

export default theme;

/**
 * react-native-elements colors
 * 		primary,
		secondary,
		grey0,
		grey1,
		grey2,
		grey3,
		grey4,
		grey5,
		greyOutline,
		searchBg,
		success,
		error,
		warning,
		divider
 */
