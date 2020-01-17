import React from 'react'
import { Color, useApp, Box } from 'ink'
import useRouter from '../hooks/useRouter';

const MessageScreen: React.FC = () => {
  const { exit } = useApp();
  const router = useRouter();

  const text = router.activeRouteParams.text;

  return (<Box paddingTop={1} paddingLeft={1} paddingBottom={1}><Color green>{text || 'Success'}</Color></Box>)
}

export default MessageScreen
