import React from "react";
import { ViewX } from "../Lib/base";
import viewStyles from "../Styles/ViewStyles";

export default ({ style, ...other }) => {
	return <ViewX {...other} style={[viewStyles.section, style]} />;
};
