import appStyles from "./ApplicationStyles";

import { StyleSheet } from "react-native";
import colors from "../Themes/Colors";

const viewStyles = StyleSheet.create({
	container: {
		...appStyles.screens.container
	},

	section: {
		...appStyles.screens.section
	}
});

export default viewStyles;
