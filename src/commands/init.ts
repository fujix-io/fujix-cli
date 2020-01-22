import { existsSync, mkdirSync, readFileSync } from 'fs';

import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';
import { GENERATED_DIR_PATH, ROOT_DIR } from '../generator';

const init = (args: string[], flags: Args) => {
  const targetDir = args[1];
  if (existsSync(targetDir)) return initInk('message', ['Init', '🔥 Directory already exists'], flags);

  mkdirSync(`${process.cwd()}/${targetDir}`);
  process.env.FUJIX_CHILD_DIR = targetDir;

  const credentialsPath = `${ROOT_DIR()}/fujix-credentials.json`;

  if (!existsSync(credentialsPath)) return initInk('login', args, flags);

  const credentialsJSON = readFileSync(credentialsPath, { encoding: 'utf-8' });
  const credentials: Credentials = JSON.parse(credentialsJSON);

  if (credentials) {
    process.env.FUJIX_ROOT_TOKEN = credentials.token;
    process.env.FUJIX_PROJECT_URL = credentials.url;
  }

  return initInk('ping', args, flags);
};

export default init;
