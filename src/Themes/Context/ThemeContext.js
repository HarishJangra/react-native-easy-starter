import React, {useState, useMemo} from 'react';
import {Appearance} from 'react-native';
import defaultTheme from '..';
import CyanTheme from '../configs/cyan';

const ThemeContext = React.createContext();

export const ThemeProvider = ({theme, children}) => {
  const colorScheme = Appearance.getColorScheme();

  const systemTheme = useMemo(() => {
    const isDark = colorScheme === 'dark';
    return isDark ? CyanTheme : defaultTheme;
  }, [colorScheme]);

  const [themeObj, changeTheme] = useState(theme || systemTheme);

  const setTheme = t => {
    changeTheme(t);
  };
  const contextValue = useMemo(
    () => ({
      theme: themeObj,
      changeTheme: t => setTheme(t),
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
