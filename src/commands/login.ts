import fs from 'fs';

import initInk from "../components/common/init-ink"

const login = (args: string[], flags: any) => {
  return initInk('login', args);
}

export default login;
