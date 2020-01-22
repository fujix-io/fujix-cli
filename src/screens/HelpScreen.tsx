import React from 'react'
import { Color, useApp, Box } from 'ink'

import useRouter from '../hooks/useRouter';
import colors from '../colors';

const helps = [
  'fujix generate - Generate Fuji X client',
  'fujix login - Login with Fuji X project url and root token',
  'fujix ping - Check endpoint availability',
]

const HelpScreen: React.FC = () => {
  const { exit } = useApp();
  const router = useRouter();

  return (<Box padding={1} flexDirection="column">
      {helps.map(help => (
        <Box key={help}>
          <Color hex={colors.success}>{help}</Color>
        </Box>
      ))}
    </Box>)
}

export default HelpScreen
