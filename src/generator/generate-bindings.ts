import * as tsnode from 'ts-node';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

import { buildSchema } from 'graphql';
import { TypescriptGenerator, Generator } from 'graphql-binding';

import { generateClient } from '@fujix/client';

import { GENERATED_DIR_PATH, MethodOptions } from '.';

const filenames = {
  typescript: {
    inputSchemaPath: 'schema.ts',
    outputBindingPath: 'binding.ts',
    client: 'index.ts',
  },
  javascript: {
    inputSchemaPath: 'schema.js',
    outputBindingPath: 'binding.js',
    client: 'index.js',
  },
};

const bindingClientCode = {
  typescript: `import { HttpLink } from 'apollo-link-http';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import fs from 'fs';

import { Binding } from './binding';

const fetch = require('node-fetch');

export class FujiXLink extends HttpLink {
  constructor(token?: string) {
    const credentials = JSON.parse(fs.readFileSync(\`${__dirname}/../fujix-credentials.json\`, { encoding: 'utf-8' }));
    if (!token && !credentials.token) {
      throw new Error(
        'No Fujix token provided.',
      );
    }

    super({
      fetch,
      uri: credentials.url,
      headers: { Authorization: token || credentials.token },
    });
  }
}

export default class FujiXBinding extends Binding {
  constructor(token?: string) {
    const schema = makeRemoteExecutableSchema({
      schema: fs.readFileSync(\`\${__dirname}/schema.graphql\`, 'utf-8'),
      link: new FujiXLink(token),
    });
    super({ schema });
  }
}

`,
  javascript: `import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import fs from 'fs';

import { Binding } from './binding';

export class FujiXLink extends HttpLink {
  constructor(token) {
    const credentials = JSON.parse(fs.readFileSync(\`${__dirname}/../fujix-credentials.json\`, { encoding: 'utf-8' }));
    if (!token && !credentials.token) {
      throw new Error(
        'No Fujix token provided.',
      );
    }

    super({
      fetch,
      uri: credentials.url,
      headers: { Authorization: token || credentials.token },
    });
  }
}

export default class FujiXBinding extends Binding {
  constructor(token) {
    const schema = makeRemoteExecutableSchema({
      schema: fs.readFileSync(\`\${__dirname}/schema.graphql\`, 'utf-8'),
      link: new FujiXLink(token),
    });
    super({ schema });
  }
}
`,
};

const generateBindings = async (options: MethodOptions) => {
  // const schemaPath = `${GENERATED_DIR_PATH(options.context.flags['--out'])}/schema.graphql`;
  // const lang: keyof typeof bindingClientCode = options.context.flags['--language'];
  // const inputSchemaPath = resolve(`${GENERATED_DIR_PATH(options.context.flags['--out'])}/${filenames[lang].inputSchemaPath}`);
  // const outputBindingPath = resolve(`${GENERATED_DIR_PATH(options.context.flags['--out'])}/${filenames[lang].outputBindingPath}`);

  // if (!existsSync(schemaPath) || !existsSync(inputSchemaPath)) {
  //   return false;
  // }

  // if (lang === 'typescript') {
  //   tsnode.register();
  // }

  // const schemaString = readFileSync(`${GENERATED_DIR_PATH(options.context.flags['--out'])}/schema.graphql`, { encoding: 'utf-8' });

  // const schema = buildSchema(schemaString);
  // const args = {
  //   schema,
  //   inputSchemaPath,
  //   outputBindingPath,
  //   isDefaultExport: true,
  // };

  // const generator = lang === 'typescript' ? new TypescriptGenerator(args) : new Generator(args);

  // const code = generator.render();

  // writeFileSync(outputBindingPath, code, { encoding: 'utf-8' });
  // writeFileSync(`${GENERATED_DIR_PATH(options.context.flags['--out'])}/${filenames[lang].client}`, bindingClientCode[lang], { encoding: 'utf-8' });

  const authorization = process.env.FUJIX_ROOT_TOKEN;
  const url = process.env.FUJIX_PROJECT_URL;

  await generateClient({
    authorization,
    url,
    path: GENERATED_DIR_PATH(options.context.flags['--out'])
  })

  return true;
};

export default generateBindings;
