import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, ButtonX } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import useTheme from "../../Themes/Context";
import useTranslation from "../../i18n";
import { LOCALES } from "../../Constants/index";
import metrics from "../../Themes/Metrics";

const MainScreen = ({ navigation }) => {
	const { state, logout } = useAuth();
	const { theme } = useTheme();

	const { t, locale, changeLocale } = useTranslation();

	const _changeLocale = () => {
		changeLocale(locale == LOCALES.HINDI ? LOCALES.ENGLISH : LOCALES.HINDI);
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
				<Text style={{ fontSize: 24, color: colors.green300 }}>
					{t("welcome")}
				</Text>

				<ButtonX
					dark={true}
					color={theme.colors.accent}
					label={t("logout")}
					onPress={logout}
				/>

				<ButtonX
					dark={true}
					mode="outline"
					color={theme.colors.accent}
					label={t("change_locale")}
					onPress={_changeLocale}
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
		headerTitle: t("notifications"),
		headerTintColor: ["black"],
		headerTitleStyle: {
			width: metrics.screenWidth,
			fontWeight: "700"
		}
	};
};

export default MainScreen;
