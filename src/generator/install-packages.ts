import { exec } from 'child_process';
import { MethodOptions, ROOT_DIR } from '.';

export const packages = ['graphql', 'graphql-tools', 'graphql-binding', 'node-fetch', 'apollo-link-http', 'dotenv'];

const installPackages = async (options: MethodOptions) => {
  let packageManagerPrefix = 'yarn init -y && yarn add';

  if (options.context.flags['--npm']) {
    packageManagerPrefix = 'npm init -y && npm install';
  }

  const command = `${packageManagerPrefix} ${packages.join(' ')}`;

  try {
    await new Promise((resolve, reject) => exec(command, { cwd: ROOT_DIR() }, (err: Error, stdout: string, stderr: string) => {
      if (err) {
        reject(err);
      }
      resolve();
    }));
  } catch (err) {
    return false;
  }

  return true;
};

export default installPackages;
