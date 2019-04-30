import React from "react";
import defaultTheme from "../Themes";

const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
	state = {
		theme: defaultTheme
	};

	changeTheme(theme) {
		this.setState({
			theme
		});
	}

	render() {
		return (
			<ThemeContext.Provider
				value={{
					...this.state,
					changeTheme: t => this.changeTheme(t)
				}}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContext;
