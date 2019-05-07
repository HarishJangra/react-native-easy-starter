import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const ICON_TYPE = {
	ICONICONS: "ionicons",
	ANT_ICON: "ant",
	EVIL_ICONS: "EVIL",
	FONT_AWESOME: "FONTAWESOME",
	FONT_AWESOME5: "fontawwesome5",
	MATERIAL_ICONS: "MaterialIcons",
	FEATHER_ICONS: "FEATHER",
	ENTYPO: "ENTYPO",
	OCTICONS: "OCTICONS",
	MATERIAL_COMMUNITY: "MATERIALCOMMUNITY"
};

export const IconX = ({ origin, name, color, size, paddingLeft, style }) => {
	let colorx = color || "#aaaaaa";
	let sizex = size || 24;
	let namex = name || "right";
	let paddingx = paddingLeft || null;

	let Element = Ionicons;

	switch (origin) {
		case ICON_TYPE.ANT_ICON:
			Element = AntDesign;
			break;

		case ICON_TYPE.ENTYPO:
			Element = Entypo;
			break;

		case ICON_TYPE.MATERIAL_ICONS:
			Element = MaterialIcons;
			break;

		case ICON_TYPE.FONT_AWESOME5:
			Element = FontAwesome5;
			break;

		case ICON_TYPE.FEATHER_ICONS:
			Element = Feather;
			break;

		case ICON_TYPE.EVIL_ICONS:
			Element = EvilIcons;
			break;

		case ICON_TYPE.FONT_AWESOME:
			Element = FontAwesome;
			break;

		case ICON_TYPE.OCTICONS:
			Element = Octicons;
			break;
		case ICON_TYPE.MATERIAL_COMMUNITY:
			Element = MaterialCommunityIcons;
			break;

		default:
			Element = Ionicons;
			break;
	}

	return (
		<Element
			name={namex}
			size={sizex}
			color={colorx}
			style={[{ paddingLeft: paddingx }, style]}
		/>
	);
};
