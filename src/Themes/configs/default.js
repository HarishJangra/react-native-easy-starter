import { DefaultTheme } from "react-native-paper";

const theme = {
	...DefaultTheme,
	dark: false,
	roundness: 5,
	colors: {
		...DefaultTheme.colors,
		primary: "#006E90",
		accent: "#99C24D",
		background: "#fafafa",
		header:'#ffffff'
	}
};

export default theme;
