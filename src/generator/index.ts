import generateSchema from './generate-schema';
import generateTypings from './generate-typings';
import installPackages from './install-packages';
import clearGenerated from './clear-generated';
import configureEnvironment from './configure-environment';
import generateBindings from './generate-bindings';
import { IAppContext } from '../components/context/AppContext';

export const GENERATED_DIR_PATH = (folderName: string = 'fujix-generated') => `${process.cwd()}/${folderName}`;

const steps = [
  {
    name: 'clearGenerated',
    label: '🗑  Clearing generated dir',
    method: clearGenerated
  },
  {
    name: 'installPackages',
    label: '📦 Installing necessary packages',
    method: installPackages
  },
  {
    name: 'configureEnvironment',
    label: '🔐 Configure FujiX environment',
    method: configureEnvironment
  },
  {
    name: 'generateSchema',
    label: '📃 Generating GraphQL Schema',
    method: generateSchema
  },
  // {
  //   name: 'generateTypings',
  //   label: '📐 Generating Typescript types',
  //   method: generateTypings
  // },
  {
    name: 'generateBindings',
    label: '🔗 Generating bindings',
    method: generateBindings
  },
]

export interface MethodOptions extends Credentials {
  context: IAppContext
}

export interface Step {
  name: StepNames;
  label: string;
  method: (options: MethodOptions) => any
}

export type StepNames = 'generateSchema' | 'generateTypings' | 'generateBindings' | 'configureEnvironment' | 'installPackages' | 'clearGenerated'

export default steps;
