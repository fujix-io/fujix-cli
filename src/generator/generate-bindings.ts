import { generateClient } from '@fujix/client';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const generateBindings = async (options: MethodOptions) => {
  const apiKey = process.env.FUJIX_API_KEY;
  const url = process.env.FUJIX_PROJECT_URL;

  await generateClient({
    apiKey,
    url,
    path: GENERATED_DIR_PATH(process.env.FUJIX_CLIENT_DIR),
  });

  return true;
};

export default generateBindings;
