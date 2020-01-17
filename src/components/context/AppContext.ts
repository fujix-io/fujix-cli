import React from 'react';

const appContext = {
  command: '',
  args: ['']
}

const AppContext = React.createContext(appContext);

export interface IAppContext {
  command: string,
  args: string[]
}

export default AppContext;