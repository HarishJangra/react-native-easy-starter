import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function() {
	return (
		<View
			style={{
				padding: 20,
				backgroundColor: "black",
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<ActivityIndicator size="large" color="cyan" />
			<Text
				style={{
					color: "cyan",
					fontSize: 24,
					paddingLeft: 10,
					marginTop: 10
				}}
			>
				LOADING...
			</Text>
		</View>
	);
}
