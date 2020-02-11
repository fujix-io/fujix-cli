import { generateClient } from '@fujix/client';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const generateBindings = async (options: MethodOptions) => {
  const authorization = process.env.FUJIX_ROOT_TOKEN;
  const url = process.env.FUJIX_PROJECT_URL;

  await generateClient({
    authorization,
    url,
    fromIntrospection: true,
    path: GENERATED_DIR_PATH(options.context.flags['--out']),
  });

  return true;
};

export default generateBindings;
