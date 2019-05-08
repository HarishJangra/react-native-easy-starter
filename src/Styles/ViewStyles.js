import appStyles from "./ApplicationStyles";

import { StyleSheet } from "react-native";
import colors from "../Themes/Colors";

const viewStyles = StyleSheet.create({
	container: {
		...appStyles.screens.container,
		backgroundColor: colors.transparent
	},

	section: {
		...appStyles.screens.section
	},
	center:{
		alignItems:'center',
		justifyContent:'center'
	}
});

export default viewStyles;
