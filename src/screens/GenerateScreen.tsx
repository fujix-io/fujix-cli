import React, { useEffect, useState } from 'react'
import { Box, Color } from 'ink'

import generatorSteps, { StepNames, Step } from '../generator';
import GeneratorStepItem from '../components/generate/GeneratorStepItem';

export type StepStatus = 'pending' | 'loading' | 'success' | 'failed';

export interface StepState {
  status: StepStatus;
  label?: 'string';
  executionTime: number;
}

type StepStateMap = {
  [key in StepNames]: StepState
}

const GenerateScreen = () => {
  const [steps, setSteps] = useState<StepStateMap>(generatorSteps.reduce((r, { name, label }) => ({...r, [name]: { status: 'pending', label }}), {}) as StepStateMap);
  const [step, setStep] = useState('');
  const { FUJIX_ROOT_TOKEN: token, FUJIX_PROJECT_URL: url } = process.env;

  const setStepStatus = (name: StepNames, status: StepStatus, executionTime?: number) => {
    setSteps((steps) => ({ ...steps, [name]: { ...steps[name], status, ...(executionTime ? { executionTime } : {}) } }));
  }

  const generate = async () => {
    if (token && url) {
      for (const step of (generatorSteps as Step[])) {
        const { name } = step;
        setStep(step.name)
        setStepStatus(name, 'loading')
        const now = Date.now();
        const result = await step.method({ token, url})
        if (result) {
          const diff = Date.now() - now;
          setStepStatus(name, 'success', diff)
        } else {
          setStepStatus(name, 'failed')
        }
      }

      setStep('')
    }
  }

  useEffect(() => {
    generate();
  }, [])

  const succeededSteps = Object.keys(steps).filter((key: StepNames) => steps[key].status === 'success').length
  const totalTime = Object.keys(steps).reduce((r: number, key: StepNames) => r += steps[key].executionTime || 0, 0)

  const getSucceededLabel = () => succeededSteps === generatorSteps.length
    ? <Color hex="#7bed9f">🚀  Total time: {totalTime}ms</Color>
    : null

  return (
    <Box paddingTop={1} paddingLeft={1} flexDirection="column">
      <Box marginBottom={1}><Color hex="#7bed9f">Succeeded steps: {succeededSteps}/{generatorSteps.length}</Color></Box>
      {Object.keys(steps).map((key: StepNames) => {
        const currentStep = steps[key];
        const isActive = step === key;

        return <GeneratorStepItem {...currentStep}  key={key} isActive={isActive} />
      })}
      <Box marginBottom={1}>{getSucceededLabel()}</Box>
    </Box>
  )
}

export default GenerateScreen
