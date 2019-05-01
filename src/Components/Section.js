import React from "react";
import viewStyles from "../Styles/ViewStyles";
import View from "./View";

export default ({ style, ...other }) => {
	return <View {...other} style={[viewStyles.section, style]} />;
};
