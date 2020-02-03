import React from 'react';

const appContext = {
  command: '',
  args: [''],
  flags: {},
};

export interface Args {
  [key: string]: any;
}

const AppContext = React.createContext(appContext);

export interface AppContextType {
  command: string;
  args: string[];
  flags: Args;
}

export default AppContext;
