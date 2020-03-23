import React, {useState} from 'react';
import defaultTheme from '..';

const ThemeContext = React.createContext();

export const ThemeProvider = ({theme, children}) => {
  const [themeObj, changeTheme] = useState(theme || defaultTheme);

  const setTheme = t => {
    changeTheme(t);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeObj,
        changeTheme: t => setTheme(t),
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
