#!/usr/bin/env node
import Arg from 'arg';

import generate from './commands/generate';
import login from './commands/login';
import ping from './commands/ping';

const main = async (): Promise<any> => {
  const args = Arg({
    '--help': Boolean,
  }, { argv: process.argv.slice(2) });

  const [command] = args._;

  switch (command) {
    case 'login': return login(args._, args);
    case 'generate': return generate(args._, args);
    case 'ping': return ping(args._, args);
  }
}

main()