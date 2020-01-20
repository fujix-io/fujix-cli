import { useContext } from "react";
import AppContext, { IAppContext } from "../components/context/AppContext";

const useApp = (): IAppContext => {
  const ctx = useContext(AppContext);
  
  return ctx;
}

export default useApp;