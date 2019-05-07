import React from "react";
import { StatusBar } from "react-native";
import NavigationService from "./Navigation";
import createStore from "./Store";
import { StoreProvider } from "easy-peasy";

import PrimaryNav from "./Navigation/AppNavigation";
import { Provider as PaperProvider } from "react-native-paper";

import  { ThemeProvider } from "./Themes/Context/ThemeContext";
import { AppContextProvider } from "./Services/Auth/AppContext";

import { Screen } from "./Components";
import colors from "./Themes/Colors";
import useTheme from "./Themes/Context";

//create the easy store
const store = createStore();

//return root component
export default () => {
	return (
		<Screen>			
			<StoreProvider store={store}>
			<StatusBar translucent backgroundColor={"rgba(0,0,0,0.2)"}/>
				<ThemeProvider>
					<ThemeConsumer />
				</ThemeProvider>
			</StoreProvider>
		</Screen>
	);
};

const ThemeConsumer = props => {
	const { theme } = useTheme();

	return (
		<PaperProvider theme={theme}>
			<AppContextProvider>
				<PrimaryNav
					screenProps={{theme}}
					ref={nav => NavigationService.setTopLevelNavigator(nav)}
				/>
			</AppContextProvider>
		</PaperProvider>
	);
};
