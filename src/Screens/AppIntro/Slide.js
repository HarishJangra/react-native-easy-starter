import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	Platform
} from "react-native";

const { width, height } = Dimensions.get("window");

const DefaultSlide = props => {
	const style = {
		backgroundColor: props.backgroundColor,
		width: props.width,
		flex: 1,
		paddingBottom: props.bottomButton ? 132 : 64
	};
	return (
		<View style={[styles.mainContent, style]}>
			<Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
			<Image source={props.image} style={props.imageStyle} />

			<View>
				{props.renderExtra ? props.renderExtra() : null}
				<Text style={[styles.text, props.textStyle]}>{props.text}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContent: {
		justifyContent: "space-around",
		alignItems: "center"
	},
	text: {
		color: "rgba(255, 255, 255, .7)",
		fontSize: 16,
		width,
		textAlign: "center",
		fontWeight: "300",
		paddingHorizontal: 16
	},
	title: {
		fontSize: 26,
		color: "rgba(255, 255, 255, .7)",
		fontWeight: "300",
		width,
		textAlign: "center",
		paddingHorizontal: 16
	}
});

export default DefaultSlide;
