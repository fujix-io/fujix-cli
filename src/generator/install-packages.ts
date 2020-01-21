import { exec } from 'child_process';
import { MethodOptions } from '.';

export const packages = ['graphql', 'graphql-tools', 'graphql-binding', 'node-fetch', 'apollo-link-http', 'dotenv'];

const installPackages = async (options: MethodOptions) => {
  let packageManagerPrefix = 'yarn add'

  if (options.context.flags['--npm']) {
    packageManagerPrefix = 'npm install'
  }

  const command = `${packageManagerPrefix} ${packages.join(' ')}`;

  try {
    await new Promise((resolve, reject) => exec(command, { cwd: process.cwd() },  (err: Error, stdout: string, stderr: string) => {
      if (err) {
        reject(err);
      }
      resolve();
    }));
  } catch (err) {
    return false;
  }

  return true;
}

export default installPackages;