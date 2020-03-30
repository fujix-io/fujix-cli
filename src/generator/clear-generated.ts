import { existsSync, mkdirSync } from 'fs';
import rimraf from 'rimraf';
import chalk from 'chalk';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const clearGenerated = async (options: MethodOptions) => {
  const clientDir = process.env.FUJIX_CLIENT_DIR!;
  const clientDirPaths = clientDir.split('/');

  clientDirPaths.slice(1).reduce((r, path) => {
    if (!existsSync(GENERATED_DIR_PATH(r))) {
      mkdirSync(GENERATED_DIR_PATH(r));
    }

    return `${r}/${path}`;
  }, clientDirPaths[0]);

  if (existsSync(GENERATED_DIR_PATH(clientDir))) {
    await new Promise((resolve, reject) => rimraf(GENERATED_DIR_PATH(clientDir), (err) => {
      if (err) reject(err);
      resolve();
    }));

    if (options.context.flags['--raw']) {
      console.log(chalk.cyan(`Generated folder clear: ${GENERATED_DIR_PATH(clientDir)}`));
    }
  }

  return true;
};

export default clearGenerated;
