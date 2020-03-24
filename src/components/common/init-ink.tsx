import React from 'react';
import { render } from 'ink';

import Wrapper from '../../Wrapper';
import { FlagsType } from '../..';

export default async (command: string, args: string[], flags: FlagsType) => {
  return render(<Wrapper flags={flags} args={args} command={command} />);
};
