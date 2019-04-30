import React, { useContext } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import NavigationService from "./Navigation";
import createStore from "./Store";
import { StoreProvider } from "easy-peasy";
import PrimaryNav from "./Navigation/AppNavigation";
import { Provider as PaperProvider } from "react-native-paper";
import ThemContextObj, { ThemeProvider } from "./Themes/ThemeContext";
import { AppContextProvider } from "./Services/AppContext";
//create the easy store
const store = createStore();

//return root component
export default () => {
	return (
		<View style={styles.main}>
			<StoreProvider store={store}>
				<ThemeProvider>
					<ThemeConsumer />
				</ThemeProvider>
			</StoreProvider>
		</View>
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

const styles = StyleSheet.create({
	main: {
		flex: 1
	}
});
