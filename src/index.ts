#!/usr/bin/env node
import Arg from 'arg';

import generate from './commands/generate';
import login from './commands/login';
import ping from './commands/ping';

const main = async (): Promise<any> => {
  const rawArgs = Arg({
    '--help': Boolean,
    '--npm': Boolean,
    '--out': String,
    '--language': String,
    '-o': '--out',
    '-h': '--help',
    '-lang': '--language'
  }, { argv: process.argv.slice(2) });

  const {
    '--language': language = 'typescript',
    ...flags
  } = rawArgs;

  const args = { ...flags, '--language': language };

  const [command] = rawArgs._;

  switch (command) {
    case 'login': return login(rawArgs._, args);
    case 'generate': return generate(rawArgs._, args);
    case 'ping': return ping(rawArgs._, args);
  }
}

main()