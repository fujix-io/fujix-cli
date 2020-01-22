import React from 'react';

import AppContext, { Args } from './AppContext';

interface AppProviderProps {
  command: string;
  args: string[];
  flags: Args;
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
