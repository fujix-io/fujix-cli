import { generate } from '@graphql-codegen/cli';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const generateTypings = async (options: MethodOptions): Promise<boolean> => {
  try {
    await generate(
      {
        schema: {
          [options.url]: {
            headers: {
              Authorization: options.token,
            }
          }
        },
        silent: true,
        generates: {
          [`${GENERATED_DIR_PATH(options.context.flags['--out'])}/typings.d.ts`]: {
            plugins: ['typescript'],
          },
        },
      },
      true
    );
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
}

export default generateTypings;
