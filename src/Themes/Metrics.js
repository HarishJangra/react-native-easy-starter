import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

const metrics = {
	s1: 5,
	s2: 8,
	s3: 16,
	s4: 20,
	s5: 30,
	s6: 40,

	horizontalLineHeight: 1,

	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,

	navBarHeight: Platform.OS === "ios" ? 64 : 54,

	buttonRadius: 4,

	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},

	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	}
};

export default metrics;
