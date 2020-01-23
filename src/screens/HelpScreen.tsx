import React from 'react';
import { Color, Box } from 'ink';

import colors from '../colors';

const Divider = require('ink-divider');

interface HelpCommand {
  command: string | React.ReactNode;
  description: string | React.ReactNode;
}

interface HelpSection {
  title: string;
  commands: HelpCommand[];
}

const helps: HelpSection[] = [
  {
    title: 'Commands',
    commands: [
      {
        command: 'fujix generate',
        description: 'Generate Fuji X client',
      },
      {
        command: 'fujix login',
        description: 'Login with Fuji X project url and root token',
      },
      {
        command: 'fujix ping',
        description: 'Check endpoint availability',
      },
      {
        command: <React.Fragment>
          <Color hex={colors.success}>fujix init </Color>
          <Color hex={colors.green}>{'<project_name>'}</Color>
        </React.Fragment>,
        description: <React.Fragment>
          <Color hex={colors.white}>Init project in folder: </Color>
          <Color hex={colors.green}>{'<project_name>'}</Color>
        </React.Fragment>,
      },
    ],
  },
  {
    title: 'Flags',
    commands: [
      {
        command: <React.Fragment>
          <Color hex={colors.success}>--out / -o </Color>
          <Color hex={colors.green}>{'<folder_name>'}</Color>
        </React.Fragment>,
        description: 'Specify generated folder name',
      },
      {
        command: <React.Fragment>
          <Color hex={colors.success}>--language / -lang </Color>
          <Color hex={colors.green}>{'<typescript|javascript>'}</Color>
        </React.Fragment>,
        description: 'Specify language for generated code',
      },
      {
        command: '--npm',
        description: 'Use NPM instead of Yarn',
      },
    ],
  },
];

const HelpScreen: React.FC = () => {
  return (<Box flexDirection="column">
    {helps.map(section => (
      <Box paddingTop={1} flexDirection="column" key={section.title}>
        <Divider title={section.title}/>
        <Box paddingTop={1} flexDirection="column">
          {section.commands.map((help, index) =>
            <Box paddingLeft={1} marginBottom={1} key={index}>
              <Color hex={colors.success}>{help.command} </Color>
              <Color hex={colors.white}>- {help.description}</Color>
            </Box>,
          )}
        </Box>
      </Box>
    ))}
  </Box>);
};

export default HelpScreen;
