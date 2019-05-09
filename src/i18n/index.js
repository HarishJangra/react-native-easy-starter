
import React, { useContext } from 'react';
import LocaleContext from './LocaleContext';

const useTranslation = (props) => {
    return useContext(LocaleContext)
}

export default useTranslation