import React from 'react';

import AppContext from './AppContext';
import { FlagsType } from '../..';

interface AppProviderProps {
  command: string;
  args: string[];
  flags: FlagsType;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, command, args, flags }) => {
  return (
    <AppContext.Provider value={{
      command,
      args,
      flags,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
