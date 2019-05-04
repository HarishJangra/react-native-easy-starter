import React, { useRef } from "react";
import { View, Text, Keyboard } from "react-native";
import { useStore, useActions } from "easy-peasy";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { STATUS } from "../../Constants";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Section, PasswordInputX, InputX, ButtonX } from "../../Components";

import useTheme from "../../Themes/Context";
import useAuth from "../../Services/Auth";

export default () => {
	const onChange = useActions(actions => actions.login.onLoginInputChange);

	const { state, login } = useAuth();
	const { theme } = useTheme();

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
		<LoadingActionContainer>
			<Section>
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
			</Section>
			<Section>
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
			</Section>

			<Section>
				<ButtonX
					loading={loading}
					color={loading ? theme.colors.accent : theme.colors.primary}
					onPress={ loginUser }
					label=" LOGIN "
				/>

				<ButtonX
					mode="text"
					onPress={() => {}} 
					label=" NEED HELP "
				/>

			</Section>			
		</LoadingActionContainer>
	);
};
