import React from 'react';
import Spinner from 'ink-spinner';
import { Box, Color } from 'ink';

import {  StepState } from '../../screens/GenerateScreen';
import colors from '../../colors';

interface GeneratorStepItemProps extends StepState {
  isActive?: boolean;
}

const GeneratorStepItem: React.FC<GeneratorStepItemProps> = ({ status, label, isActive, executionTime }) => {
  const getStatusIndicator = () => {
    switch (status) {
      case 'loading':
        return <Color hex="#7bed9f"><Spinner type="earth"/></Color>;
      case 'pending': return <Color hex="#eccc68">🕐 </Color>;
      case 'success': return <Color hex="#2ed573">⚡️ </Color>;
      case 'failed': return <Color hex="#ff4757">🔥 </Color>;
      default: return null;
    }
  };

  const getExecutionLabelColor = () => {
    switch (status) {
      case 'failed':
        return colors.danger;
      case 'success':
        return colors.success;
      default:
        return colors.white;
    }
  };

  const getLabelColor = () => {
    switch (status) {
      case 'failed':
        return colors.danger;
      case 'success':
        return colors.white;
      default:
        return colors.white;
    }
  };

  const getLabel = () => <Color hex={getLabelColor()}>{label}</Color>;

  const getExecutionTime = () => executionTime && <Color hex={getExecutionLabelColor()}>{executionTime}ms</Color>;

  return (
    <Box marginBottom={1} flexDirection="row">
      <Box>{getStatusIndicator()}</Box><Box>{getLabel()}</Box> - {getExecutionTime()}
    </Box>
  );
};

export default GeneratorStepItem;
