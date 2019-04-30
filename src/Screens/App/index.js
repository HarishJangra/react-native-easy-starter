import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import AppStateContext from "../../Services/AppContext";

export default () => {
	const { state, logout } = useContext(AppStateContext);

	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: "#fafafa"
			}}
		>
			<StatusBar barStyle="light-content" backgroundColor="#313141" />
			<Text style={{ fontSize: 24, color: "aqua" }}>HOME SCREEN</Text>

			<Button onPress={logout} style={{ marginTop: 20 }} mode="contained">
				LOGOUT
			</Button>
		</View>
	);
};
