import React, { useState } from "react";
import useNetInfo from "./NetInfo";

const NetContext = React.createContext();

export const NetInfoProvider = ({ children }) => {
  const netInfo = useNetInfo();

  return <NetContext.Provider value={netInfo}>{children}</NetContext.Provider>;
};

export default NetContext;
