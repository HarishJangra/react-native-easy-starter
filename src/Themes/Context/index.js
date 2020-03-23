import ThemeContext from './ThemeContext';
import {useContext} from 'react';

const useAppTheme = props => {
  return useContext(ThemeContext);
};

export default useAppTheme;
