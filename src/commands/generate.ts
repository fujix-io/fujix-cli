import fs from 'fs';

import initInk from '../components/common/init-ink';
import { Args } from '../components/context/AppContext';

const generate = (args: string[], flags: Args) => {

  return initInk('login', args, flags);
};

export default generate;
