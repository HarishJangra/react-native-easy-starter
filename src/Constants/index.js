import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android" ? true : false;
export const isIos = !isAndroid;

export const APP_STATE = {
	PUBLIC: "PUBLIC_LOGIN",
	PRIVATE: "MAIN_APP",
	AUTH: "CHECKING_LOGIN"
};

export const STATUS = {
	SUCCESS: "SUCCESS",
	NOT_STARTED: "NOT_STARTED",
	FETCHING: "FETCHING",
	FAILED: "FAILED"
};
