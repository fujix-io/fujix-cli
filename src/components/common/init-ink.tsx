import React from 'react';
import { render } from 'ink';

import { Args } from '../context/AppContext';
import Wrapper from '../../Wrapper';

export default async (command: string, args: string[], flags: Args) => {
  return render(<Wrapper flags={flags} args={args} command={command} />);
};
