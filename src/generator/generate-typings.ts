import { generate } from '@graphql-codegen/cli';

const generateTypings = async (credentials: Credentials): Promise<boolean> => {
  try {
    await generate(
      {
        schema: {
          [credentials.url]: {
            headers: {
              Authorization: credentials.token,
            }
          }
        },
        silent: true,
        generates: {
          [`${process.cwd()}/fujix-generated/typings.ts`]: {
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
