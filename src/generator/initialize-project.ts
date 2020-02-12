import { ROOT_DIR, MethodOptions, GENERATED_DIR_PATH } from '.';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

interface PackageJsonConfig {
  name: string;
  isTypeScript: boolean;
}

type Language = 'typescript' | 'javascript';

interface SimpleCodeConfig {
  token: string;
  url: string;
  slug: string;
}

type SimpleCodeInterface = {
  [key in Language]: (config: SimpleCodeConfig) => string
};

const getSimpleCode: SimpleCodeInterface = {
  typescript: ({ url, token, slug }: SimpleCodeConfig) => `
import FujiX from '@fujix/client/${slug}';

// Move these variables to the your environmental variables
const fujix = new FujiX({ authorization: '${token}', url: '${url}' });

const testCall = async () => {
  const dmmf = await fujix.query.dmmf();
}

testCall();

`,
  javascript: ({ url, token, slug }: SimpleCodeConfig) => `
const FujiX = require('@fujix/client/${slug}');

// Move these variables to the your environmental variables
const fujix = new FujiX({ authorization: '${token}', url: '${url}' });

function testCall() {
  fujix.query.dmmf()
    .then(function(response) {
      console.log(response)
    });
    .then(function(error) {
      console.log(error)
    });
}

testCall();
  `,
};

const getTsConfig = () => `
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["esnext"],
    "declaration": true,
    "noImplicitAny": true,
    "downlevelIteration": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "rootDir": "src",
    "allowJs": true,
    "outDir": "build",
    "typeRoots": ["node_modules/@types"],
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "strictNullChecks": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
  ]
}
`;

const getPackageJson = (options: PackageJsonConfig) => `
{
  "name": "${options.name}",
  "version": "0.0.1",
  "main": "./lib/index.js",
  "scripts": {
    "start": "node ${options.isTypeScript ? 'build' : 'src'}/index.js"${options.isTypeScript ? ',\n"build":"tsc --declaration"' : ''}
  }${options.isTypeScript ? ',\n"devDependencies": { "typescript": "^3.7.5" }' : ''}
}
`;

const initializeProject = async (options: MethodOptions) => {
  const token = process.env.FUJIX_ROOT_TOKEN!;
  const url = process.env.FUJIX_PROJECT_URL!;
  const projectSlug = process.env.FUJIX_PROJECT_SLUG;
  const childDirName = process.env.FUJIX_CHILD_DIR;
  const rootDir = ROOT_DIR();
  const language: Language = options.context.flags['--language'];
  const isTypeScript = language === 'typescript';

  const clientDir = process.env.FUJIX_CLIENT_DIR!;
  const clientDirPaths = clientDir.split('/');

  clientDirPaths.slice(1).reduce((r, path) => {
    if (!existsSync(GENERATED_DIR_PATH(r))) {
      mkdirSync(GENERATED_DIR_PATH(r));
    }

    return `${r}/${path}`;
  }, clientDirPaths[0]);

  const packageJson = getPackageJson({ isTypeScript, name: childDirName! });
  const code = getSimpleCode[language]({ token, url, slug: projectSlug! });

  if (isTypeScript) {
    const tsConfig = getTsConfig();
    writeFileSync(`${rootDir}/tsconfig.json`, tsConfig);
  }

  writeFileSync(`${rootDir}/package.json`, packageJson);

  mkdirSync(`${rootDir}/src`);
  if (existsSync(`${rootDir}/src`)) {
    writeFileSync(`${rootDir}/src/index.${isTypeScript ? 'ts' : 'js'}`, code);
  }

  return true;
};

export default initializeProject;
