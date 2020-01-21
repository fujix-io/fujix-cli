import fs from 'fs';

import initInk from "../components/common/init-ink"
import { Args } from '../components/context/AppContext';

const generate = (args: string[], flags: Args) => {
  const credentialsExists = fs.existsSync(`${process.cwd()}/fujix-credentials.json`);
  
  if (!credentialsExists) {
    return initInk('login', args, flags);
  } else {
    const credentialsJSON = fs.readFileSync(`${process.cwd()}/fujix-credentials.json`, { encoding: 'utf-8' });
    const credentials: Credentials = JSON.parse(credentialsJSON);

    if (credentials) {
      process.env.FUJIX_ROOT_TOKEN = credentials.token;
      process.env.FUJIX_PROJECT_URL = credentials.url;
    }

    return initInk('ping', args, flags);
  } 
}

export default generate;
