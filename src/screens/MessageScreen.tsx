import React from 'react';
import { Color, Box } from 'ink';

import useRouter from '../hooks/useRouter';
import colors from '../colors';
import useApp from '../hooks/useApp';

const MessageScreen: React.FC = () => {
  const router = useRouter();
  const app = useApp();

  const text = router.activeRouteParams.text || app.args[1];

  return (<Box paddingTop={1} paddingLeft={1} paddingBottom={1}><Color hex={colors.success}>{text || 'Success'}</Color></Box>);
};

export default MessageScreen;
