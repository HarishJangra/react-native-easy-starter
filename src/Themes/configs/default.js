import { DefaultTheme } from "react-native-paper";

const theme = {
	...DefaultTheme,
	dark: false,
	roundness: 5,
	colors: {
		...DefaultTheme.colors,
		primary: "#99C24D",
		accent: "#99C24D",
		background: "#fafafa",
		header:'#ffffff'
	}
};

export default theme;
