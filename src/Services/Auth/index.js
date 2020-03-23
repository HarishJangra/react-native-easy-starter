import {useContext} from 'react';
import AppStateContext from './AppContext';

const useAuth = props => {
  return useContext(AppStateContext);
};

export default useAuth;
