import "./i18n";
import React, { useState, useEffect } from "react";
import I18n from "i18n-js";
import useStorage from "../Services/AsyncStorage";
import { LOCALES } from "../Constants";
import translateOrFallback from "./TranslateFallback";

const LocaleContext = React.createContext();

export const LocaleContextProvider = props => {
	const [locale, changeLocale] = useStorage("@locale", LOCALES.ENGLISH);
	I18n.locale = locale;

	const _changeLocale = locale => {
		I18n.locale = locale;
		changeLocale(locale);
	};

	return (
		<LocaleContext.Provider
			value={{
				...I18n,
				t: translateOrFallback,
				changeLocale: _changeLocale
			}}
		>
			{props.children}
		</LocaleContext.Provider>
	);
};

export default LocaleContext;
