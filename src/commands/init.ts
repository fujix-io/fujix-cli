import { existsSync } from 'fs';

import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';

const init = (args: string[], flags: Args) => {
  const targetDir = args[1];
  if (!targetDir) return initInk('message', ['Init', '🗂 Directory name is empty'], flags);
  if (existsSync(targetDir)) return initInk('message', ['Init', '🔥 Directory already exists'], flags);

  return initInk('login', args, flags);
};

export default init;
