import React, { useEffect, useState } from 'react';
import { Box, Color } from 'ink';

import generatorSteps, { StepNames, Step, GENERATED_DIR_PATH } from '../generator';
import GeneratorStepItem from '../components/generate/GeneratorStepItem';
import colors from '../colors';
import useApp from '../hooks/useApp';

const Divider = require('ink-divider');

export type StepStatus = 'pending' | 'loading' | 'success' | 'failed';

export interface StepState {
  status: StepStatus;
  label?: 'string';
  executionTime?: number;
  message?: string;
}

type StepStateMap = {
  [key in StepNames]: StepState
};

const GenerateScreen = () => {
  const [steps, setSteps] = useState<StepStateMap>(generatorSteps.reduce((r, { name, label }) => ({
    ...r, [name]: { label, status: 'pending' },
  }), {}) as StepStateMap);
  const [step, setStep] = useState('');
  const [failedStep, setFailedStep] = useState<Step>();
  const context = useApp();
  const { FUJIX_ROOT_TOKEN: token, FUJIX_PROJECT_URL: url } = process.env;

  const setStepStatus = (name: StepNames, status: StepStatus, executionTime?: number, message?: string) => {
    const additionalFields: Omit<StepState, 'status' | 'label'> = {};

    if (message) additionalFields.message = message;
    if (executionTime) additionalFields.executionTime = executionTime;

    setSteps(steps => ({ ...steps, [name]: { ...steps[name], status, ...additionalFields } }));
  };

  const generate = async () => {
    if (token && url) {
      for (const step of (generatorSteps as Step[])) {
        const { name } = step;
        setStep(step.name);
        setStepStatus(name, 'loading');
        const now = Date.now();
        try {
          const result = await step.method({ token, url, context });
          const diff = Date.now() - now;
          if (result) {
            setStepStatus(name, 'success', diff);
          } else {
            setStepStatus(name, 'failed', diff);
          }
        } catch (err) {
          const diff = Date.now() - now;
          setStepStatus(name, 'failed', diff, err.message);
          setFailedStep(step);
          break;
        }
      }
      setStep('');
    }
  };

  useEffect(() => {
    generate();
  }, []);

  const succeededSteps = Object.keys(steps).filter((key: StepNames) => steps[key].status === 'success').length;
  const totalTime = Object.keys(steps).reduce((r: number, key: StepNames) => r + (steps[key].executionTime || 0), 0);

  const dividerTitle = failedStep ? 'Failed' : 'Succeeded';

  const getResultLabel = () => succeededSteps === generatorSteps.length
    ? <Box paddingBottom={1} flexDirection="column">
        <Box paddingLeft={1} flexDirection="column">
          <Box marginBottom={1}>
            <Color hex={colors.success}>🚀  FujiX client is generated successfully in {GENERATED_DIR_PATH(context.flags['--out'])}</Color>
          </Box>
          <Color hex={colors.success}>🕒  Total time: {totalTime}ms</Color>
        </Box>
      </Box>
    : failedStep
      && <Box paddingBottom={1} flexDirection="column">
        <Box paddingLeft={1} flexDirection="column">
          <Box marginBottom={1}><Color hex={colors.danger}>🔥  Generation failed at step: </Color><Color hex={colors.white}>{failedStep.label} </Color></Box>
          <Color hex={colors.danger}>📝  With message: </Color><Color hex={colors.success}>{steps[failedStep.name].message} </Color>
        </Box>
      </Box>
      || null;

  return (
    <Box paddingTop={1} flexDirection="column">
      <Box paddingLeft={1} flexDirection="column">
        <Box marginBottom={1}><Color hex={colors.success}>🗂  Generating into: {GENERATED_DIR_PATH(context.flags['--out'])}</Color></Box>
        <Box marginBottom={1}><Color hex={colors.white}>⚙️  Succeeded steps: {succeededSteps}/{generatorSteps.length}</Color></Box>
        {Object.keys(steps).map((key: StepNames) => {
          const currentStep = steps[key];
          const isActive = step === key;

          return <GeneratorStepItem {...currentStep}  key={key} isActive={isActive} />;
        })}
      </Box>
      {getResultLabel() && <Box flexDirection="column"> <Divider title={dividerTitle} /> {getResultLabel()}</Box>}
    </Box>
  );
};

export default GenerateScreen;
