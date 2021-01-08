import { Button, Center, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AddIcon } from '@chakra-ui/icons'
import * as React from 'react'

export function HighlightCard({ children, ...props }) {
  return (
    <Grid templateColumns='1fr 1fr' borderRadius={4} overflow='hidden' minHeight='3xs' {...props}>
      {children}
    </Grid>
  )
}

function Content({ heading, text, ...props }) {
  return (
    <Stack direction='column' spacing={2} p={4} {...props}>
      <AddIcon />
      <Heading color='' size='md'>
        {heading}
      </Heading>
      <Text color='gray.50' lineHeight='shorter' fontWeight='bold'>
        {text}
      </Text>
    </Stack>
  )
}

const HoverButton = styled(Button)`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${HighlightCard}:hover & {
    opacity: 1;
  }
`

function Image({ imageUrl }) {
  return (
    <Center backgroundImage={`url(${imageUrl})`} backgroundSize='cover'>
      <HoverButton className='ImageContentColumnButton'>See more</HoverButton>
    </Center>
  )
}

HighlightCard.Content = Content
HighlightCard.Image = Image
