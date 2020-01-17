import React from 'react';
import { render } from 'ink';

import Wrapper from '../../Wrapper';

export default async (command: string, args: string[]) => {
  return render(<Wrapper args={args} command={command} />)
}