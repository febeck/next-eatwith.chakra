import * as React from 'react'
import { Box} from '@chakra-ui/react'
import { Header } from './Header'

export function Layout ({ children }) {
  return (
    <>
    <Header/>
    <Box flexShrink={0} flexGrow={1} flexBasis='auto'>
      {children}
    </Box>
    </>
  )
}