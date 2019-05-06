import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";



const MainScreen = ({navigation}) => {
	const { state, logout } = useAuth();
	
	useEffect(() => {
		navigation.setParams({headerColor: 'red'})
	}, [])
	return (
		<LoadingActionContainer fixed>
			<Container
				style={{
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<StatusBar translucent backgroundColor={"rgba(0,0,0,0.2)"}/>
				<Text style={{ fontSize: 24, color: colors.green300 }}>
					HOME SCREEN
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


			<Button
				color={"#543365"}
				onPress={
					()=> NavigationService.navigate('Screen2')
				}
				style={{ marginTop: 20 }}
				mode="contained"
			>
				2nd screen
			</Button>


			</Container>
		</LoadingActionContainer>
	);
};

MainScreen.navigationOptions = ({navigation})=> {
	console.log('LOG_navigagtion',navigation);
	
	return {
		headerStyle:[NavigationStyles.header_statusBar, {backgroundColor:navigation.getParam('headerColor' , '#334466')}],
		headerTitle: "HOME",
		headerTitleStyle: {
			color: "white",
			width: 100,
			fontWeight: "800"
		}
	
	}
}

export default MainScreen
