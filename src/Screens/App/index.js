import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, ButtonX } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import useTheme from "../../Themes/Context";
import { redTheme } from "../../Themes";
import metrics from '../../Themes/Metrics';

const MainScreen = ({navigation}) => {
	const { state, logout } = useAuth();
	const {theme, changeTheme} = useTheme()
	
	useEffect(() => {
		navigation.setParams({headerColor: theme.colors.header})
	}, [])
	return (
		<LoadingActionContainer fixed>
			<Container
				style={{
					justifyContent: "center",
					padding:20
				}}
			>
				<Text style={{ fontSize: 24, color: colors.green300 }}>
					MAIN SCREEN
				</Text>

				<ButtonX
					dark={true}
					color={theme.colors.accent}
					label="LOGOUT"
					onPress={logout}
				/>

			</Container>
		</LoadingActionContainer>
	);
};

MainScreen.navigationOptions = ({navigation})=> {
	// console.log('LOG_navigagtion',navigation);
	return {
		headerStyle:[NavigationStyles.header_statusBar, {elevation:1,backgroundColor:navigation.getParam('headerColor' , '#334466')}],
        headerTitle: "NOTIFICATIONS ",
        headerTintColor:['black'],
		headerTitleStyle: {
			width: metrics.screenWidth,
			fontWeight: "700"
		}	
	}
}

export default MainScreen
