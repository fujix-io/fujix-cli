import fs from 'fs';

import initInk from "../components/common/init-ink"
import { Args } from '../components/context/AppContext';
import { ROOT_DIR } from '../generator';

const generate = (args: string[], flags: Args) => {
  const credentialsExists = fs.existsSync(`${ROOT_DIR()}/fujix-credentials.json`);
  
  if (!credentialsExists) {
    return initInk('login', args, flags);
  }

  const credentialsJSON = fs.readFileSync(`${ROOT_DIR()}/fujix-credentials.json`, { encoding: 'utf-8' });
  const credentials: Credentials = JSON.parse(credentialsJSON);

  if (credentials) {
    process.env.FUJIX_ROOT_TOKEN = credentials.token;
    process.env.FUJIX_PROJECT_URL = credentials.url;
  }

  return initInk('ping', args, flags);
}

export default generate;
