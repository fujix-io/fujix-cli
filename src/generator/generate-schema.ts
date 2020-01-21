import { introspectSchema } from 'graphql-tools';
import { printSchema } from 'graphql';
import { HttpLink } from 'apollo-link-http';
import fs from 'fs';

import { GENERATED_DIR_PATH, MethodOptions } from './index';

const fetch = require('node-fetch');

export interface GenerateSchemaOptions {
  path: string
}

const filenames = {
  typescript: {
    schema: 'schema.ts',
  },
  javascript: {
    schema: 'schema.js',
  },
}

const executableSchemaDefintion = {
  typescript: `import * as fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: fs.readFileSync(__dirname + '/schema.graphql', 'utf-8'),
})

export default schema
`,
javascript: `import fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync(__dirname + '/schema.graphql', 'utf-8'),
})

export default schema
  `
}

const generateSchema = async ({ url: uri, token, context }: MethodOptions): Promise<boolean> => {
  const link = new HttpLink({
    uri,
    headers: { Authorization: token },
    fetch
  });

  const lang: keyof typeof executableSchemaDefintion = context.flags['--language'];

  try {
    const schema = await introspectSchema(link);
    
    const schemaString = printSchema(schema);

    const executableSchemaFilename = filenames[lang].schema;

    fs.writeFileSync(`${GENERATED_DIR_PATH(context.flags['--out'])}/schema.graphql`, schemaString, { encoding: 'utf-8' });
    fs.writeFileSync(`${GENERATED_DIR_PATH(context.flags['--out'])}/${executableSchemaFilename}`, executableSchemaDefintion[lang], { encoding: 'utf-8' });
    
  } catch (err) {
    return false;
  }

  return true;
}

export default generateSchema;
