import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";



const MainScreen = () => {
	const { state, logout } = useAuth();
	
	return (
		<LoadingActionContainer fixed>
			<Container
				style={{
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Text style={{ fontSize: 24, color: colors.green300 }}>
					 SCREEN 2
				</Text>

				<Button
					onPress={logout}
					style={{ marginTop: 20 }}
					mode="contained"
				>
					LOGOUT
				</Button>

				<Button
				color={"#885223"}
				onPress={
					()=> NavigationService.navigate('AppUpdate')
				}
				style={{ marginTop: 20 }}
				mode="contained"
			>
				MODAL
			</Button>




			</Container>
		</LoadingActionContainer>
	);
};

MainScreen.navigationOptions = {
	headerStyle:[NavigationStyles.header_statusBar2, {backgroundColor:'#7788aa'}],
	headerTitle: "SCREEN TWO",
	headerTitleStyle: {
		color: "black",
		width: 200,
		fontWeight: "800"
	}

}

export default MainScreen
