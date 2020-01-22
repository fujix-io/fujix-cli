import { useContext } from 'react';
import AppContext, { AppContextType } from '../components/context/AppContext';

const useApp = (): AppContextType => {
  const ctx = useContext(AppContext);

  return ctx;
};

export default useApp;
