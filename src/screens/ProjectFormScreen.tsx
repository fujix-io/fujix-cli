import React from 'react';
import { Box, Text, Color, useInput } from 'ink';
import Spinner from 'ink-spinner';
import { writeFileSync, existsSync } from 'fs';

import TextInput from '../components/common/TextInput';
import withAppContext from '../components/context/withAppContext';
import { AppContextType } from '../components/context/AppContext';

import checkIntrospectionQuery from '../helpers/check-introspection-query';
import validateUrl from '../helpers/validate-url';

import useRouter from '../hooks/useRouter';
import useApp from '../hooks/useApp';

import colors from '../colors';
import { ROOT_DIR, GENERATED_DIR_PATH } from '../generator';

type InputNames = 'url' | 'token';

type Values = {
  [key in InputNames]: string
};

interface InputSingature {
  name: InputNames;
  label: string;
  placeholder: string;
}

const inputs: InputSingature[] = [
  {
    name: 'url',
    label: 'Project URL: ',
    placeholder: 'http://project.fujix.io/',
  },
  {
    name: 'token',
    label: 'Root token: ',
    placeholder: 'Root token for endpoint',
  },
];

const ProjectForm: React.FC<AppContextType> = () => {
  const router = useRouter();
  const { args, flags } = useApp();

  const [authChecking, setAuthChecking] = React.useState(false);
  const [values, setValues] = React.useState<Values>({ url: '', token: '' });
  const [active, setActive] = React.useState(0);

  useInput((input, key) => {
    if (key.upArrow) {
      if (active > 0) {
        setActive(active - 1);
      }
    }

    if (key.downArrow) {
      if (active < inputs.length - 1) {
        setActive(active + 1);
      }
    }
  });

  const onChange = (name: InputNames, value: string) => {
    const valuesCopy = { ...values, [name]: value };
    setValues(valuesCopy);
  };

  const onSubmit = async () => {
    if (values.token && values.url) {
      const isGenerate = args[0] === 'generate' || args[0] === 'init';
      const credentials: Credentials = {
        token: values.token,
        url: values.url,
      };

      const isValidUrl = validateUrl(credentials.url);

      if (!isValidUrl) {
        router.setRoute('message', { params: { text: <Box><Color red>🤷 Url is invalid</Color> </Box> } });
      }

      writeFileSync(`${ROOT_DIR()}/fujix-credentials.json`, JSON.stringify(credentials));

      if (existsSync(`${GENERATED_DIR_PATH(flags['--out'])}/.env`)) {
        const environmentFile = `
FUJIX_ROOT_TOKEN=${credentials.token}
FUJIX_PROJECT_URL=${credentials.url}
        `;

        writeFileSync(`${GENERATED_DIR_PATH(flags['--out'])}/.env`, environmentFile, { encoding: 'utf-8' });
      }
      setAuthChecking(true);
      const result = await checkIntrospectionQuery(credentials);
      setAuthChecking(false);

      if (!result) {
        router.setRoute('message', { params: { text: <Box><Color red>🙅 Endpoint does not response or token is invalid</Color> </Box> } });
      }

      if (args[0] === 'login' && result) {
        router.setRoute('message', { params: { text: `🎉 You successfully logged in for app - ${values.url}` } });
      }

      if (isGenerate && result) {
        process.env.FUJIX_ROOT_TOKEN = credentials.token;
        process.env.FUJIX_PROJECT_URL = credentials.url;

        router.setRoute('ping');
      }
    }
  };

  return (
    <Box paddingLeft={1} paddingTop={1} paddingBottom={1} flexDirection="column">
      {inputs.map(({ name, label, placeholder }, index) => (
        <Box key={name} flexDirection="row">
          <Color hex={colors.warning}>
            <Text bold={active === index}>{label}</Text>
          </Color>
          {active === index
            ? <Color hex={colors.white}>
                <TextInput
                placeholder={placeholder}
                value={values[name]}
                onChange={value => onChange(name, value)}
                onSubmit={() => {
                  if (active === inputs.length - 1) {
                    onSubmit();
                  } else {
                    if (values.url && values.token) {
                      onSubmit();
                    } else {
                      setActive(index + 1);
                    }
                  }
                }}
              />
            </Color>
            : values[name] && <Color hex={colors.gray}>{values[name]}</Color> || (placeholder && <Color hex={colors.gray}>{placeholder}</Color>)
          }
        </Box>
      ))}
      {authChecking && <Box paddingLeft={1} paddingTop={1}><Color hex={colors.success}><Spinner type="dots"/></Color> Logging in</Box>}
  </Box>
  );
};

export default withAppContext(ProjectForm);
