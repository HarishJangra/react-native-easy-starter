import colors from "../Themes/Colors";
import metrics from "../Themes/Metrics";

/**
 * These styles can be used application wide
 */

const flex = {
	flex: 1
};

const row = {
	flexDirection: "row",
	...flex
};

const appStyles = {
	screens: {
		container: {
			...flex,
			backgroundColor: colors.transparent
		},
		section: {
			padding: metrics.s3,
			margin: metrics.s1
		}
	},

	align: {
		row,
		spread: {
			...row,
			justifyContent: "space-between"
		},
		justifyCenter: {
			justifyContent: "center"
		},
		alignCenter: {
			alignItems: "center"
		}
	},

	spacing: {
		smallMargin: {
			margin: metrics.s1
		},
		margin: {
			margin: metrics.s2
		},
		tinyPadding: {
			padding: metrics.s1
		},
		smallPadding: {
			padding: metrics.s2
		},
		padding: {
			padding: metrics.s3
		},
		largePadding: {
			padding: metrics.s4
		},
		xlPadding: {
			padding: metrics.s5
		}
	}
};
export default appStyles;
