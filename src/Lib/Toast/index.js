import React from "react";
import Toast from "react-native-tiny-toast";
import colors from "../../Themes/Colors";

let toast;

export default function showToast(message, type, duration) {
	Toast.show(message, {
		position: -1,
		duration: 1000,
		textColor:
			type == "success"
				? "green"
				: type == "error"
				? "red"
				: type == "info"
				? "orange"
				: "white",
		containerStyle: {
			backgroundColor: colors.blueGrey900,
			borderRadius: 0,
			padding: 16,
			margin: 10
		}
	});
}

export function hideLoading() {
	Toast.hide(toast);
}

export function showLoading(message = "") {
	toast = Toast.showLoading(message, {
		position: 0,
		containerStyle: {
			padding: 30,
			backgroundColor: "rgba(0,0,0, 0.7)"
		},
		textColor: "white",
		textstyle: { fontSize: 16 }
		// maskColor:'rgba(10, 10, 10, 0.5)'
	});
}

export function showErrorToast(message) {
	showToast(message, "error");
}

export function showInfoToast(message) {
	showToast(message, "info");
}
