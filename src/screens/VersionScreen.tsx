import React from 'react';
import { Color, Box } from 'ink';

import useRouter from '../hooks/useRouter';
import colors from '../colors';
import useApp from '../hooks/useApp';

const packageJson = require('../../package.json');

const MessageScreen: React.FC = () => {
  const cliVersion = packageJson.version;
  const clientVersion = packageJson.dependencies['@fujix/client'];

  const versions = [
    {
      type: 'cli',
      text: '🧶 Version of CLI:',
      version: cliVersion,
    },
    {
      type: 'client',
      text: '🎮 Version of Client:',
      version: clientVersion,
    },
  ];

  return (<Box paddingTop={1} paddingLeft={1} paddingBottom={1} flexDirection="column">
    {versions.map(({ type, text, version }, index) => (
      <Box paddingLeft={1} paddingTop={index === 0 ? 0 : 1} key={type}>
        <Color hex={colors.white}>{text}</Color> <Color hex={colors.success}>{version}</Color>
      </Box>
    ))}
  </Box>);
};

export default MessageScreen;
