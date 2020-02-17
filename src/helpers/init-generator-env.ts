import { mkdirSync } from 'fs';
import { resolve } from 'path';

import { Args } from '../components/context/AppContext';
import { parse } from 'url';

interface InitGeneratorEnvConfig {
  args: string[];
  flags: Args;
}

const initGeneratorEnv = ({ args, flags }: InitGeneratorEnvConfig) => {
  const token = process.env.FUJIX_ROOT_TOKEN;
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
  const clientDir = `${generatedFieldName}/${projectSlug}`;

  process.env.FUJIX_PROJECT_SLUG = projectSlug;
  process.env.FUJIX_ROOT_TOKEN = token;
  process.env.FUJIX_PROJECT_URL = url;
  process.env.FUJIX_CLIENT_DIR = clientDir;
};

export default initGeneratorEnv;
