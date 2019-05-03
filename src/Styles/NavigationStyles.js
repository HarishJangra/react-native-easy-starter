import { StyleSheet, Platform } from "react-native";
import { isAndroid } from "../Constants";
// import { Colors } from '../../Themes/'

export default StyleSheet.create({
	header: {
		backgroundColor: "#313151",
		height: 60,
	},
	header_statusBar: {
		backgroundColor: "#313151",
		...getHeaderInfo()
	
	},

	header_statusBar2: {
		backgroundColor: "#513131",
		...getHeaderInfo()	
	}
});


function getHeaderInfo(){
	return isAndroid && Platform.Version > 20 ? {
		height: 86,
		paddingTop:26,
	} : {
		height:60
	}
}