import React from "react";
import { Text, ActivityIndicator } from "react-native";
import colors from "../../Themes/Colors";
import { Container } from "../../Components";

export default function() {
	return (
		<Container
			style={{
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: colors.background
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
		</Container>
	);
}
