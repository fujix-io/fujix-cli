#!/usr/bin/env node
import Arg from 'arg';

import generate from './commands/generate';
import login from './commands/login';
import ping from './commands/ping';
import help from './commands/help';
import init from './commands/init';
import version from './commands/version';

const main = async (): Promise<any> => {
  const rawArgs = Arg({
    '--help': Boolean,
    '--npm': Boolean,
    '--out': String,
    '--language': String,
    '--version': Boolean,
    '-v': '--version',
    '-o': '--out',
    '-h': '--help',
    '-l': '--language',
  }, { argv: process.argv.slice(2) });

  const {
    '--language': language = 'typescript',
    ...flags
  } = rawArgs;

  const args = { ...flags, '--language': language };

  if (args['--version']) {
    return version(['versions'], args);
  }

  if (args['--help'] || !args._.length) {
    return help(['help'], args);
  }

  const [command] = rawArgs._;

  switch (command) {
    case 'login': return login(rawArgs._, args);
    case 'generate': return generate(rawArgs._, args);
    case 'ping': return ping(rawArgs._, args);
    case 'init': return init(rawArgs._, args);
    default: return help(['help'], args);
  }
};

main();
