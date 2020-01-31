import React, { useContext, useEffect } from 'react';
import { Color, Box, AppContext, useInput } from 'ink';

import useRouter from '../hooks/useRouter';
import colors from '../colors';
import useApp from '../hooks/useApp';
import { packages } from '../generator/install-packages';

const ConfirmScreen: React.FC = () => {
  const { exit } = useContext(AppContext);
  const router = useRouter();

  useInput((input, key) => {
    if (key.return) router.setRoute('ping');
    else { exit(); }
  });

  return (<Box paddingTop={1} paddingLeft={1} paddingBottom={1} flexDirection="column">
    <Color hex={colors.success}>🧶 These packages will be installed: {'\n'}</Color>
    {packages.map((packageName: string) => <Color key={packageName} hex={colors.white}>- {packageName}</Color>)}
    <Color hex={colors.success}>{'\n'}⚙️  Press <Color hex={colors.green}>Enter</Color> to approve or any another key to decline</Color>
  </Box>);
};

export default ConfirmScreen;
