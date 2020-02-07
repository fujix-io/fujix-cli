import generateSchema from './generate-schema';
// import generateTypings from './generate-typings';
import installPackages from './install-packages';
import clearGenerated from './clear-generated';
import configureEnvironment from './configure-environment';
import generateBindings from './generate-bindings';
import { AppContextType } from '../components/context/AppContext';

const getChildDir = () => process.env.FUJIX_CHILD_DIR ? `/${process.env.FUJIX_CHILD_DIR}` : '';

export const ROOT_DIR = () => `${process.cwd()}${getChildDir()}`;

export const GENERATED_DIR_PATH = (folderName: string = 'fujix-generated') => `${ROOT_DIR()}/${folderName}`;

const steps = [
  {
    name: 'clearGenerated',
    label: '🗑  Clearing generated dir',
    method: clearGenerated,
  },
  // {
  //   name: 'installPackages',
  //   label: '📦 Installing required packages',
  //   method: installPackages,
  // },
  // {
  //   name: 'configureEnvironment',
  //   label: '🔐 Configure FujiX environment',
  //   method: configureEnvironment,
  // },
  // {
  //   name: 'generateSchema',
  //   label: '📃 Generating GraphQL Schema',
  //   method: generateSchema,
  // },
  // {
  //   name: 'generateTypings',
  //   label: '📐 Generating Typescript types',
  //   method: generateTypings
  // },
  {
    name: 'generateBindings',
    label: '🔗 Generating bindings',
    method: generateBindings,
  },
];

export const isInstallingExist = steps.find(({ name }) => name === 'installPackages');

export interface MethodOptions extends Credentials {
  context: AppContextType;
}

export interface Step {
  name: StepNames;
  label: string;
  method: (options: MethodOptions) => any;
}

export type StepNames = 'generateSchema' | 'generateTypings' | 'generateBindings' | 'configureEnvironment' | 'installPackages' | 'clearGenerated';

export default steps;
