import { existsSync } from 'fs';

import initInk from '../components/common/init-ink';
import initGeneratorEnv from '../helpers/init-generator-env';
import { FlagsType } from '..';

const init = (args: string[], flags: FlagsType) => {
  const targetDir = args[1];
  if (!targetDir) return initInk('message', ['Init', '🗂 Directory name is empty'], flags);
  if (existsSync(targetDir)) return initInk('message', ['Init', '🔥 Directory already exists'], flags);

  if (flags['--url'] && flags['--token']) {
    process.env.FUJIX_API_KEY = flags['--token'];
    process.env.FUJIX_PROJECT_URL = flags['--url'];

    initGeneratorEnv({ args, flags });

    return initInk('ping', args, flags);
  }

  return initInk('login', args, flags);
};

export default init;
