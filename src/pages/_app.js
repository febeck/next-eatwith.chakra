import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
console.log('👉 ----------------')
console.log('👉 ~ theme', theme)
console.log('👉 ----------------')

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
