import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { View, Image, Text } from "react-native";
import { Container } from "../../Components";
import NavigationService from "../../Navigation/index";
import Routes from "../../Navigation/Routes/index";
import AppIntroSlider from "../../Lib/AppIntroSlider";

const slides = [
	{
		key: "somethun",
		title: "SCHOOLLOG",
		text: "Description.\nSay something cool",
		backgroundColor: "#59b2ab"
	},
	{
		key: "somethun-dos",
		title: "ZNMD 2",
		text: "Other cool stuff",
		backgroundColor: "#febe29"
	},
	{
		key: "somethun1",
		title: "Rocket guy",
		text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
		//   image: require('./assets/3.jpg'),
		backgroundColor: "#52bcb5"
	}
];

const AppIntro = props => {
	const _onDone = () => {
		NavigationService.navigate(Routes.LOGIN_SCREEN);
	};

	return (
		<Container>
			<AppIntroSlider
				slides={slides}
				onDone={_onDone}
				showPrevButton={true}
				showSkipButton={true}
			/>
		</Container>
	);
};

const _renderItem = item => {
	return (
		<Container
			style={{
				alignItems: "center",
				justifyContent: "space-around",
				backgroundColor: item.backgroundColor
			}}
		>
			<Text style={styles.title}>{item.title}</Text>
			<Image source={item.image} />
			<Text style={styles.text}>{item.text}</Text>
		</Container>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		marginVertical: 10,
		color: "white"
	},
	text: {
		fontSize: 16,
		color: "white"
	}
});

export default AppIntro;
