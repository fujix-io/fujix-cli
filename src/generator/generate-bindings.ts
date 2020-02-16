import { generateClient } from '@fujix/client';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const generateBindings = async (options: MethodOptions) => {
  const authorization = process.env.FUJIX_ROOT_TOKEN;
  const url = process.env.FUJIX_PROJECT_URL;

  await generateClient({
    authorization,
    url,
    path: GENERATED_DIR_PATH(process.env.FUJIX_CLIENT_DIR),
  });

  return true;
};

export default generateBindings;
