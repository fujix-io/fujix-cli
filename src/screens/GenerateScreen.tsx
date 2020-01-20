import React, { useEffect } from 'react'
import { Box, Color } from 'ink'

const GenerateScreen = () => {
  const { FUJIX_ROOT_TOKEN: token, FUJIX_PROJECT_URL: url } = process.env;

  return (
    <Box>
      <Color red>Hello</Color>
    </Box>
  )
}

export default GenerateScreen
