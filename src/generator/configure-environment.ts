import { writeFileSync, existsSync, mkdirSync } from 'fs';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const configureEnvironment = async (options: MethodOptions) => {
  const token = process.env.FUJIX_ROOT_TOKEN;
  const url = process.env.FUJIX_PROJECT_URL;

  const isGeneratedDirExists = existsSync(GENERATED_DIR_PATH(options.context.flags['--out']));
    
  if (!isGeneratedDirExists) { mkdirSync(GENERATED_DIR_PATH(options.context.flags['--out'])) }

  const envCode = `FUJIX_ROOT_TOKEN=${token}\nFUJIX_PROJECT_URL=${url}`

  writeFileSync(`${GENERATED_DIR_PATH(options.context.flags['--out'])}/.env`, envCode, { encoding: 'utf-8' });

  return true;
}

export default configureEnvironment;
