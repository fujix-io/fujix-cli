import React from 'react'
import { AppProps, Box } from 'ink';

import ProjectForm from './screens/ProjectForm';
import GenerateScreen from './screens/GenerateScreen';
import MessageScreen from './screens/MessageScreen';
import HealthCheck from './screens/HealthCheck';

import AppProvider from './components/context/AppProvider';
import { Route, Router } from './components/router/Router';

interface CLIAppProps extends AppProps {
  command: string;
  args: string[]
}

const routes = [
  {
    component: ProjectForm,
    routeKey: 'login'
  },
  {
    component: HealthCheck,
    routeKey: 'ping'
  },
  {
    component: GenerateScreen,
    routeKey: 'generate'
  },
  {
    component: MessageScreen,
    routeKey: 'message'
  },
];

const App: React.FC<CLIAppProps> = ({ command, args, exit }) => {
  
  if (!command) {
    exit(); return null; 
  }

  return <Box flexDirection="column">
      <AppProvider args={args} command={command}>
        <Router defaultRoute={command}>
          {routes.map(route => (
            <Route key={route.routeKey} component={<route.component />} path={route.routeKey} />
          ))}
        </Router>
      </AppProvider>
    </Box>
}

export default App;
