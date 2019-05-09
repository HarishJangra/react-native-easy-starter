import "./i18n";
import { find } from "lodash";

import React, { useState, useEffect } from "react";
import I18n from "i18n-js";
import useStorage from "../Services/AsyncStorage";
import { LOCALES } from "../Constants";
import translateOrFallback from "./TranslateFallback";

const LocaleContext = React.createContext();

export const LocaleContextProvider = props => {
	const [locale, changeLocale] = useStorage("@language", LOCALES.ENGLISH);
	I18n.locale = locale.name;

	const _changeLocale = locale => {
		I18n.locale = locale.name;
		changeLocale(locale);
	};

	return (
		<LocaleContext.Provider
			value={{
				...I18n,
				localeProvider: locale,
				t: translateOrFallback,
				changeLocale: _changeLocale
			}}
		>
			{props.children}
		</LocaleContext.Provider>
	);
};

export default LocaleContext;
