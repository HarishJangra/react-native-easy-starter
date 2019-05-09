import React, { useEffect } from "react";

import { View, Text, StatusBar } from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, ButtonX } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import useTheme from "../../Themes/Context";
import metrics from "../../Themes/Metrics";
import { DrawerActions } from "react-navigation-drawer";

const MainScreen = ({ navigation }) => {
	const { state, logout } = useAuth();
	const { theme } = useTheme();

	const _toggleDrawer = props => {
		NavigationService.toggleDrawer();
	};

	useEffect(() => {
		navigation.setParams({ headerColor: theme.colors.header });
	}, []);

	return (
		<LoadingActionContainer fixed>
			<Container
				style={{
					justifyContent: "center",
					padding: 20
				}}
			>
				<ButtonX
					dark={true}
					mode="outline"
					label="DRAWER"
					onPress={_toggleDrawer}
				/>
			</Container>
		</LoadingActionContainer>
	);
};

MainScreen.navigationOptions = ({ navigation, screenProps }) => {
	const { t, theme } = screenProps;
	return {
		headerStyle: [
			NavigationStyles.header_statusBar,
			{
				elevation: 1,
				backgroundColor: navigation.getParam("headerColor", "#334466")
			}
		],
		headerTitle: t("home"),
		headerTintColor: ["black"],
		headerTitleStyle: {
			width: metrics.screenWidth,
			fontWeight: "700"
		}
	};
};

export default MainScreen;
