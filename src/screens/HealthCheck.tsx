import React, { useState, useEffect } from 'react'
import fs from 'fs';

import { Box, Color } from 'ink'
import Spinner from 'ink-spinner';
import checkIntrospectionQuery from '../helpers/check-introspection-query';
import useRouter from '../hooks/useRouter';

const HealthCheck = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({ url: '', token: '' });

  useEffect(() => {
    const credentials = JSON.parse(fs.readFileSync(`${process.cwd()}/fujix-credentials.json`, { encoding: 'utf-8' }));
    
    setCredentials(credentials);
  }, [])

  const checkEndpoint = async () => {
    setChecking(true);

    const result = await checkIntrospectionQuery(credentials)
    setChecking(false);
    if (!result) {
      router.setRoute('message', { params: { text: <Box><Color red>🙅 {credentials.url} does not response or token is invalid</Color> </Box> } });
    } else {
      router.setRoute('message', { params: { text: <Box><Color hex="#7bed9f">🎉 {credentials.url} is healthfull!</Color> </Box> } });
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
        <Color hex="#70a1ff"><Spinner type="dots"/></Color> Checking ${credentials.url}
      </Box>
    )
  } else {
    return null;
  }
}

export default HealthCheck
