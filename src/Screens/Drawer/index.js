import React from "react";
import { Container, Section } from "../../Components";
import { Text, ScrollView } from "react-native";
import viewStyles from "../../Styles/ViewStyles";
import { DrawerItems, SafeAreaView } from "react-navigation";

const Drawer = props => {
	return (
		<ScrollView>
			<SafeAreaView
				style={viewStyles.container}
				forceInset={{ top: "always", horizontal: "never" }}
			>
				<Section style={{ paddingTop: 100, backgroundColor: "white" }}>
					<Text>Drawer</Text>
				</Section>
			</SafeAreaView>
		</ScrollView>
	);
};

export default Drawer;
