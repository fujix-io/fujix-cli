import { existsSync } from 'fs';
import rimraf from 'rimraf';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const clearGenerated = async (options: MethodOptions) => {
  if (existsSync(GENERATED_DIR_PATH(options.context.flags['--out']))) {
    await new Promise((resolve, reject) => rimraf(GENERATED_DIR_PATH(options.context.flags['--out']), (err) => {
      if (err) reject(err);
      resolve();
    }))
  }

  return true;
}

export default clearGenerated;
