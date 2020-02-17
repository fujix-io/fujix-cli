import initInk from '../components/common/init-ink';
import { Args } from '../components/context/AppContext';
import initGeneratorEnv from '../helpers/init-generator-env';

const generate = (args: string[], flags: Args) => {
  if (flags['--url'] && flags['--token']) {
    process.env.FUJIX_ROOT_TOKEN = flags['--token'];
    process.env.FUJIX_PROJECT_URL = flags['--url'];

    initGeneratorEnv({ args, flags });

    return initInk('ping', args, flags);
  }

  return initInk('login', args, flags);
};

export default generate;
