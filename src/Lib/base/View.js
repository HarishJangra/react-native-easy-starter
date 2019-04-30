import React from "react";
import { View, SafeAreaView } from "react-native";
import { isIos } from "../Constants";

export default ({ children, useSafeAreaView, ...other }) => {
	const Element = useSafeAreaView && isIOS ? SafeAreaView : View;
	return <Element {...other}>{children}</Element>;
};
