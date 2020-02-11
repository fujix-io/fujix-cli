import React from 'react';
import { AppProps, Box } from 'ink';

import ProjectForm from './screens/ProjectFormScreen';
import GenerateScreen from './screens/GenerateScreen';
import MessageScreen from './screens/MessageScreen';
import HelpScreen from './screens/HelpScreen';
import VersionScreen from './screens/VersionScreen';
import HealthCheck from './screens/HealthCheck';

import AppProvider from './components/context/AppProvider';
import { Route, Router } from './components/router/Router';
import { Args } from './components/context/AppContext';

const Divider = require('ink-divider');

interface CLIAppProps extends AppProps {
  command: string;
  args: string[];
  flags: Args;
}

const routes = [
  {
    component: ProjectForm,
    routeKey: 'login',
  },
  {
    component: VersionScreen,
    routeKey: 'version',
  },
  {
    component: HealthCheck,
    routeKey: 'ping',
  },
  {
    component: HelpScreen,
    routeKey: 'help',
  },
  {
    component: GenerateScreen,
    routeKey: 'generate',
  },
  {
    component: MessageScreen,
    routeKey: 'message',
  },
];

const App: React.FC<CLIAppProps> = ({ command, args, exit, flags }) => {
  if (!command) {
    exit();
    return null;
  }

  const rootCommand = args[0];

  return <Box flexDirection="column">
      <Divider
        title={`FujiX - ${rootCommand.charAt(0).toUpperCase() + rootCommand.slice(1)}`}
      />
      <AppProvider flags={flags} args={args} command={command}>
        <Router defaultRoute={command}>
          {routes.map(route => (
            <Route key={route.routeKey} component={<route.component />} path={route.routeKey} />
          ))}
        </Router>
      </AppProvider>
      <Divider />
    </Box>;
};

export default App;
