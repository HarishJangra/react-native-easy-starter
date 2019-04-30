import React from "react";
import * as Keychain from "react-native-keychain";
//@flow

export const setLoginCredentials = async (field1, field2) => {
	try {
		const response = await Keychain.setGenericPassword(field1, field2);
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
			return credentials;
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
