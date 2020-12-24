import { Box, Container, Heading } from '@chakra-ui/react'
import * as React from 'react'

export function Section({ children, ...props }) {
  if (!children) return null
  return (
    <Box py={8} {...props}>
      <Container>{children}</Container>
    </Box>
  )
}

function Header({ children, ...props }) {
  if (!children) return null
  return (
    <Heading size='lg' {...props}>
      {children}
    </Heading>
  )
}

Section.Header = Header
