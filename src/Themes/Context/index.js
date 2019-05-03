import ThemeContext from "./ThemeContext";
import { useContext } from 'react';

const useTheme = (props ) => {
    return useContext(ThemeContext)
}

export default useTheme