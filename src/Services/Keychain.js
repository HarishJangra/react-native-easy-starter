import React from "react";
import * as Keychain from "react-native-keychain";
import { timeStampX } from '../Utils/DateHelper';
//@flow

export const setLoginCredentials = async (data) => {
	try {
		const response = await Keychain.setGenericPassword(timeStampX(), data);
		console.log("keychain data securely set  ", response);
		return { status: true, response };
	} catch (e) {
		console.log("keychain access failed ", e);
		return { status: false, error: e };
	}
};

export const getLoginCredentials = async () => {
	try {
		const credentials = await Keychain.getGenericPassword();
		console.log("keychain get data ", credentials);
		if (credentials) {			
			let loginData = credentials.username && credentials.password && JSON.parse(credentials.password)
			return Object.assign({}, loginData,{
				timestamp: credentials.username
			});
		}
		return false;
	} catch (e) {
		console.log("Cannot retrieve keychain data", e);
		return false;
	}
};

export const resetLoginCredentials = async () => {
	try {
		const reset = await Keychain.resetGenericPassword();
		return reset;
	} catch (e) {
		console.log("cannot access or reset keychain data ", e);
		return false;
	}
};
