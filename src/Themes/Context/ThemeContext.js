import React, {useState, useMemo} from 'react';
import defaultTheme from '..';
import CyanTheme from '../configs/cyan';

const ThemeContext = React.createContext();

export const ThemeProvider = ({theme, children}) => {
  const [themeObj, changeTheme] = useState(theme || defaultTheme);

  const setTheme = (t) => {
    changeTheme(t);
  };
  const contextValue = useMemo(
    () => ({
      theme: themeObj,
      changeTheme: (t) => setTheme(t),
      toggleTheme: () => {
        if (themeObj.id === 1) {
          setTheme(CyanTheme);
        } else {
          setTheme(defaultTheme);
        }
      },
    }),
    [themeObj],
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
