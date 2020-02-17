#!/usr/bin/env node
import Arg from 'arg';

import generate from './commands/generate';
// import login from './commands/login';
// import ping from './commands/ping';
import help from './commands/help';
import init from './commands/init';
import version from './commands/version';

const main = async (): Promise<any> => {
  const rawArgs = Arg({
    '--help': Boolean,
    '--version': Boolean,
    '--out': String,
    '--url': String,
    '--token': String,
    // '--language': String,
    '-v': '--version',
    // '-l': '--language',
    '-h': '--help',
    '-o': '--out',
    '-t': '--token',
    '-u': '--url',
  }, { argv: process.argv.slice(2) });

  const args = rawArgs;

  if (args['--version']) {
    return version(['versions'], args);
  }

  if (args['--help'] || !args._.length) {
    return help(['help'], args);
  }

  const [command] = rawArgs._;

  switch (command) {
    case 'generate': return generate(rawArgs._, args);
    // case 'init': return init(rawArgs._, args);
    default: return help(['help'], args);
  }
};

main();
