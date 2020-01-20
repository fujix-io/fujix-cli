import React, { useState, useEffect } from 'react'
import fs from 'fs';

import { Box, Color } from 'ink'
import Spinner from 'ink-spinner';

import checkIntrospectionQuery from '../helpers/check-introspection-query';
import useRouter from '../hooks/useRouter';
import useApp from '../hooks/useApp';

const HealthCheck = () => {
  const router = useRouter();
  const { args } = useApp();
  const [checking, setChecking] = useState(true);
  const [credentials, setCredentials] = useState<Credentials>({ url: '', token: '' });

  useEffect(() => {
    const credentials = JSON.parse(fs.readFileSync(`${process.cwd()}/fujix-credentials.json`, { encoding: 'utf-8' }));
    
    setCredentials(credentials);
  }, [])

  const checkEndpoint = async () => {
    const isGenerate = args[0] === 'generate';

    const now = Date.now();
    const result = await checkIntrospectionQuery(credentials)
    if (!result) {
      setChecking(false);
      router.setRoute('message', {
        params: {
          text: <Box>
            <Color red>🌑 {credentials.url} does not response or token is invalid</Color>
          </Box>
        }
      });
    } else {
      if (isGenerate) {
        router.setRoute('generate');
      } else {
        const diff = Date.now() - now;

        router.setRoute('message', {
          params: {
            text: <Box flexDirection="column">
              <Box marginBottom={1}><Color hex="#7bed9f">🚀 {credentials.url} is running up!</Color></Box>
              <Box><Color hex="#5352ed">🌎 Ping: {diff}ms </Color></Box>
            </Box>
          }
        });
      }
    }
  }

  useEffect(() => {
    if (credentials.token && credentials.url) {
      checkEndpoint()
    }
  }, [credentials]);

  if (checking && credentials.url && credentials.token) {
    return (
      <Box paddingLeft={1} paddingTop={1}>
        <Color hex="#ced6e0"><Spinner type="moon"/></Color> Checking {credentials.url}
      </Box>
    )
  } else {
    return null
  }
}

export default HealthCheck
