import generateSchema from './generate-schema';
import generateTypings from './generate-typings';

export const GENERATED_DIR_PATH = `${process.cwd()}/fujix-generated`;

const steps = [
  {
    name: 'generateSchema',
    label: '📃 Generating GraphQL Schema',
    method: generateSchema
  },
  {
    name: 'generateTypings',
    label: '📐 Generating Typescript types',
    method: generateTypings
  },
]

export interface Step {
  name: StepNames;
  label: string;
  method: (credentials: Credentials, options?: any) => any
}

export type StepNames = 'generateSchema' | 'generateTypings'

export default steps;
