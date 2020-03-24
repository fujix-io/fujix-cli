import React from 'react';
import { FlagsType } from '../..';

const appContext: AppContextType = {
  command: '',
  args: [''],
  flags: { _: [] },
};

const AppContext = React.createContext(appContext);

export interface AppContextType {
  command: string;
  args: string[];
  flags: FlagsType;
}

export default AppContext;
