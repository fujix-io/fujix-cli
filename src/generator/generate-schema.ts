import { introspectSchema } from 'graphql-tools';
import { printSchema } from 'graphql';
import { HttpLink } from 'apollo-link-http';
import fs from 'fs';

import { GENERATED_DIR_PATH } from './index';

const fetch = require('node-fetch');

export interface GenerateSchemaOptions {
  path: string
}

const generateSchema = async ({ url: uri, token }: Credentials, options?: GenerateSchemaOptions): Promise<boolean> => {
  const link = new HttpLink({
    uri,
    headers: { Authorization: token },
    fetch
  });

  try {
    const schema = await introspectSchema(link);
    
    const schemaString = printSchema(schema);
    
    const isGeneratedDirExists = fs.existsSync(GENERATED_DIR_PATH);
    
    if (!isGeneratedDirExists) { fs.mkdirSync(GENERATED_DIR_PATH) }
    
    fs.writeFileSync(`${GENERATED_DIR_PATH}/schema.graphql`, schemaString, { encoding: 'utf-8' });
    
  } catch (err) {
    return false;
  }

  return true;
}

export default generateSchema;
