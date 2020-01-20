import React from 'react'
import Spinner from 'ink-spinner';
import { Box, Color } from 'ink';
import { StepStatus } from '../../screens/GenerateScreen';

interface GeneratorStepItemProps {
  status: StepStatus;
  label: string;
  isActive?: boolean
}

const GeneratorStepItem: React.FC<GeneratorStepItemProps> = ({ status, label, isActive }) => {
  const getStatusIndicator = () => {
    switch (status) {
      case 'loading':
        return <Color hex="#70a1ff"><Spinner type="dots"/></Color> 
      case 'pending': return null;
      case 'success': return '✅';
      case 'failed': return '❌';
      default: return null;
    }
  }

  const getLabel = () => {
    if (isActive) {
      return <Color hex="#dff9fb">{label} </Color>
    } else return <Color gray>{label}</Color>
  }

  return (
    <Box flexDirection="row">
      {getStatusIndicator()} {getLabel()}
    </Box>
  )
}

export default GeneratorStepItem
