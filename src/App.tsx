import React from 'react'

import ProjectForm from './screens/ProjectForm';
import { AppProps, Box } from 'ink';
import { Route, Router } from './components/router/Router';
import GenerateScreen from './screens/GenerateScreen';
import AppProvider from './components/context/AppProvider';
import MessageScreen from './screens/MessageScreen';

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
        <Router defaultRoute="login">
          {routes.map(route => (
            <Route key={route.routeKey} component={<route.component />} path={route.routeKey} />
          ))}
        </Router>
      </AppProvider>
    </Box>
}

export default App;
