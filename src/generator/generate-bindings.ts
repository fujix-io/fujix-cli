import { generateClient } from '@fujix/client';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const generateBindings = async (options: MethodOptions) => {
  const authorization = options.token;
  const url = options.url;

  await generateClient({
    authorization,
    url,
    path: GENERATED_DIR_PATH(process.env.FUJIX_CLIENT_DIR),
  });

  return true;
};

export default generateBindings;
