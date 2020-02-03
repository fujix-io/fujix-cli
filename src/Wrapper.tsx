import React from 'react';
import { AppContext } from 'ink';

import App from './App';
import { Args } from './components/context/AppContext';

const Wrapper = ({ command, args, flags }: { command: string, args: string[], flags: Args }) => {
  return (
    <AppContext.Consumer>
      {({ exit }) => (<App args={args} command={command} exit={exit} flags={flags} />)}
    </AppContext.Consumer>
  );
};

export default Wrapper;
