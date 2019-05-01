import React from "react";
import { ScrollView, RefreshControl } from "react-native";
import { Container } from "../Components";

export default ({
	onRefresh,
	loading,
	fixed,
	renderHeader,
	noData,
	children,
	...other
}) => {
	return (
		<Container>
			<Header />
			<Content
				onRefresh={onRefresh}
				fixed={fixed}
				loading={loading}
				children={children}
			/>
			<Footer />
		</Container>
	);
};

const Content = ({ fixed, children, onRefresh, loading }) => {
	let fallback = () => {};

	return fixed ? (
		<Container>{children}</Container>
	) : (
		<ScrollView
			keyboardShouldPersistTaps={"always"}
			nestedScrollEnabled
			refreshControl={
				<RefreshControl
					enabled={onRefresh ? true : false}
					refreshing={onRefresh && loading ? true : false}
					onRefresh={onRefresh || fallback}
				/>
			}
		>
			{children}
		</ScrollView>
	);
};

const Header = () => {
	return null;
};

const Footer = () => {
	return null;
};
