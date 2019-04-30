import React, { useContext, useRef } from "react";
import { View, Text, Keyboard } from "react-native";
import { useStore, useActions } from "easy-peasy";
import { InputX } from "../../Lib/base";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import ThemeContext from "../../Themes/ThemeContext";
import AppStateContext from "../../Services/AppContext";
import { STATUS } from "../../Constants";
import { PasswordInputX } from "../../Lib/base/Input";

export default () => {
	const onChange = useActions(actions => actions.login.onLoginInputChange);

	const { state, login } = useContext(AppStateContext);
	const { theme } = useContext(ThemeContext);

	const inputUserName = useRef();
	const inputPassword = useRef();

	const onSubmit = () => {
		inputPassword.current.focus();
	};

	const { username, password, status } = useStore(state => ({
		username: state.login.username,
		password: state.login.password,
		status: state.login.status
	}));

	const loginUser = () => {
		Keyboard.dismiss();
		login({ username, password });
	};

	const loading = status == STATUS.FETCHING;

	return (
		<View
			style={{
				justifyContent: "center",
				flex: 1,
				padding: 20,
				backgroundColor: "#fafafa"
			}}
		>
			<ScrollView keyboardShouldPersistTaps="always">
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						paddingVertical: 20
					}}
				>
					<Text
						style={{
							fontSize: 48,
							fontWeight: "bold",
							color: theme.colors.accent,
							marginVertical: 60
						}}
					>
						WELCOME
					</Text>

					<InputX
						label="USER NAME"
						// mode="outlined"
						ref={inputUserName}
						autoCapitalize="none"
						returnKeyType={"next"}
						onSubmitEditing={onSubmit}
						onChangeText={text =>
							onChange({ key: "username", value: text })
						}
						value={username}
					/>

					<PasswordInputX
						ref={inputPassword}
						value={password}
						// mode="outlined"
						label="PASSWORD"
						returnKeyType={"go"}
						onSubmitEditing={loginUser}
						onChangeText={text =>
							onChange({ key: "password", value: text })
						}
					/>

					<Button
						style={{ marginTop: 20 }}
						mode="contained"
						loading={loading}
						contentStyle={{ padding: 8 }}
						color={
							loading ? theme.colors.accent : theme.colors.primary
						}
						onPress={loginUser}
					>
						LOGIN
					</Button>

					<Button
						style={{ marginTop: 20 }}
						mode="text"
						onPress={() => {}}
					>
						NEED HELP
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};
