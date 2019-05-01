import React, { useContext } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import NavigationService from "./Navigation";
import createStore from "./Store";
import { StoreProvider } from "easy-peasy";
import PrimaryNav from "./Navigation/AppNavigation";
import { Provider as PaperProvider } from "react-native-paper";
import ThemContextObj, { ThemeProvider } from "./Themes/ThemeContext";
import { AppContextProvider } from "./Services/AppContext";

import { Screen } from "./Components";
import colors from "./Themes/Colors";

//create the easy store
const store = createStore();

//return root component
export default () => {
	return (
		<Screen>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.black}
			/>
			<StoreProvider store={store}>
				<ThemeProvider>
					<ThemeConsumer />
				</ThemeProvider>
			</StoreProvider>
		</Screen>
	);
};

const ThemeConsumer = props => {
	const { theme, changeTheme } = useContext(ThemContextObj);

	return (
		<PaperProvider theme={theme}>
			<AppContextProvider>
				<PrimaryNav
					ref={nav => NavigationService.setTopLevelNavigator(nav)}
				/>
			</AppContextProvider>
		</PaperProvider>
	);
};
