import { mkdirSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'url';

import { FlagsType } from '..';

interface InitGeneratorEnvConfig {
  args: string[];
  flags: FlagsType;
}

const initGeneratorEnv = ({ args, flags }: InitGeneratorEnvConfig) => {
  const token = process.env.FUJIX_API_KEY;
  const url = process.env.FUJIX_PROJECT_URL!;

  if (args[0] === 'init') {
    const targetDir = args[1];
    mkdirSync(`${process.cwd()}/${targetDir}`);
    process.env.FUJIX_CHILD_DIR = targetDir;
  }

  let generatedFieldName = 'generated/fujix';

  if (flags['--out']) {
    generatedFieldName = flags['--out'];
  }

  const projectSlug = parse(url).host?.split('.')[0];
  const clientDir = `${generatedFieldName}`;

  process.env.FUJIX_PROJECT_SLUG = projectSlug;
  process.env.FUJIX_API_KEY = token;
  process.env.FUJIX_PROJECT_URL = url;
  process.env.FUJIX_CLIENT_DIR = clientDir;
};

export default initGeneratorEnv;
