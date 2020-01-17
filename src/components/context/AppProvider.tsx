import React from 'react'

import AppContext from './AppContext';

interface AppProviderProps {
  command: string;
  args: string[]
}

const AppProvider: React.FC<AppProviderProps> = ({ children, command, args }) => {
  return (
    <AppContext.Provider value={{
      command,
      args,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
