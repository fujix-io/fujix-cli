import React, { useEffect, useState } from 'react'
import { Box, Color } from 'ink'

import generatorSteps, { StepNames, Step } from '../generator';
import GeneratorStepItem from '../components/generate/GeneratorStepItem';

export type StepStatus = 'pending' | 'loading' | 'success' | 'failed';

interface StepState {
  status: StepStatus,
  label?: 'string'
}

type StepStateMap = {
  [key in StepNames]: StepState
}

const GenerateScreen = () => {
  const [steps, setSteps] = useState<StepStateMap>(generatorSteps.reduce((r, { name, label }) => ({...r, [name]: { status: 'pending', label }}), {}) as StepStateMap);
  const [step, setStep] = useState('');
  const { FUJIX_ROOT_TOKEN: token, FUJIX_PROJECT_URL: url } = process.env;

  const setStepStatus = (name: StepNames, status: StepStatus) => {
    setSteps((steps) => ({ ...steps, [name]: { ...steps[name], status } }));
  }

  const generate = async () => {
    if (token && url) {
      for (const step of (generatorSteps as Step[])) {
        const { name } = step;
        setStep(step.name)
        setStepStatus(name, 'loading')
        const result = await step.method({ token, url})
        if (result) {
          setStepStatus(name, 'success')
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

  return (
    <Box flexDirection="column">
      <Color hex="#7bed9f">Succeeded steps: {succeededSteps}/{generatorSteps.length}</Color>
      {Object.keys(steps).map((key: StepNames) => {
        const currentStep = steps[key];
        const isActive = step === key;

        return <GeneratorStepItem key={key} label={currentStep.label!} status={currentStep.status} isActive={isActive} />
      })}
    </Box>
  )
}

export default GenerateScreen
