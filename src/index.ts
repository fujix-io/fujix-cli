#!/usr/bin/env node
import Arg from 'arg';
import chalk from 'chalk';

import generate from './commands/generate';
// import login from './commands/login';
// import ping from './commands/ping';
import help from './commands/help';
import init from './commands/init';
import version from './commands/version';

const rawArgs = Arg({
  '--help': Boolean,
  '--version': Boolean,
  '--out': String,
  '--url': String,
  '--token': String,
  '--silent': Boolean,
  '--raw': Boolean,
  // '--language': String,
  '-v': '--version',
  // '-l': '--language',
  '-h': '--help',
  '-o': '--out',
  '-t': '--token',
  '-u': '--url',
}, { argv: process.argv.slice(2) });

export type FlagsType = typeof rawArgs;

const main = async (): Promise<any> => {

  const args = rawArgs;

  if (args['--version']) {
    return version(['versions'], args);
  }

  if ((args['--silent'] || args['--raw']) && !(args['--url'])) {
    console.log(chalk.redBright('Flags --silent/--raw can be used only with --url'));
    return;
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
