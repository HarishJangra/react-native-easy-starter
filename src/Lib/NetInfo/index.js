import NetContext from "./Context";
import { useContext } from "react";

const useNetInfoContext = props => {
  return useContext(NetContext);
};

export default useNetInfoContext;
