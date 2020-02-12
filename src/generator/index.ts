import clearGenerated from './clear-generated';
import generateBindings from './generate-bindings';
import initializeProject from './initialize-project';
import { AppContextType } from '../components/context/AppContext';

const getChildDir = () => process.env.FUJIX_CHILD_DIR ? `/${process.env.FUJIX_CHILD_DIR}` : '';

export const ROOT_DIR = () => `${process.cwd()}${getChildDir()}`;

export const GENERATED_DIR_PATH = (folderName: string = 'fujix-generated') => `${ROOT_DIR()}/${folderName}`;

const steps = (isInit: boolean = false) => [
  ...(isInit
    ? [{
      name: 'clearGenerated',
      label: '🗂  Initialize project',
      method: initializeProject,
    }]
    : [{
      name: 'clearGenerated',
      label: '🗑  Clearing generated dir',
      method: clearGenerated,
    }]
  ),
  {
    name: 'generateBindings',
    label: '🔗 Generating bindings',
    method: generateBindings,
  },
];

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
