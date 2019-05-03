import React, {useRef} from "react";
import defaultTheme from "..";

const ThemeContext = React.createContext();

export const ThemeProvider =({theme, children}) => {
	const themeRef = useRef(theme || defaultTheme)
	
	const setTheme = (t) => {
		themeRef.current = t
	}

	return (
		<ThemeContext.Provider
			value={{
				theme : themeRef.current,
				changeTheme: t => setTheme(t)
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;
