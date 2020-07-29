import initInk from '../components/common/init-ink';
import initGeneratorEnv from '../helpers/init-generator-env';

import { FlagsType } from '..';

const generate = (args: string[], flags: FlagsType) => {
  if (flags['--url']) {
    process.env.FUJIX_API_KEY = flags['--token'] || 'unknown';
    process.env.FUJIX_PROJECT_URL = flags['--url'];

    initGeneratorEnv({ args, flags });

    return initInk('ping', args, flags);
  }

  return initInk('login', args, flags);
};

export default generate;
