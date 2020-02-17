import { existsSync } from 'fs';

import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';
import initGeneratorEnv from '../helpers/init-generator-env';

const init = (args: string[], flags: Args) => {
  const targetDir = args[1];
  if (!targetDir) return initInk('message', ['Init', '🗂 Directory name is empty'], flags);
  if (existsSync(targetDir)) return initInk('message', ['Init', '🔥 Directory already exists'], flags);

  if (flags['--url'] && flags['--token']) {
    process.env.FUJIX_ROOT_TOKEN = flags['--token'];
    process.env.FUJIX_PROJECT_URL = flags['--url'];

    initGeneratorEnv({ args, flags });

    return initInk('ping', args, flags);
  }

  return initInk('login', args, flags);
};

export default init;
