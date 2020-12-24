import * as React from 'react'
import { Box, Heading, Stack, Input, FormControl, FormLabel, Select, Button, useMediaQuery } from '@chakra-ui/react'

export function HeroSection() {
  const [isLargerThanMd] = useMediaQuery('(min-width: 48em)')

  return (
    <Box position='relative' h={{ base: 'auto', lg: 'lg' }}>
      <Box
        backgroundImage='url(https://screen-api.eatwith.com/files/1399187/-/scale_crop/2000x700/center/-/progressive/yes/)'
        backgroundPosition='center center'
        backgroundSize='cover'
        filter='brightness(0.75)'
        position='absolute'
        top={0}
        left={0}
        bottom={0}
        right={0}
      />

      <Stack position='relative' direction={{ base: 'column', md: 'row', lg: 'column' }} h='100%' p={8} spacing={12}>
        <Box
          textAlign={{ base: 'left', lg: 'center' }}
          maxW={{ base: '80%', md: '50%', lg: '70%' }}
          mx={{ base: 0, lg: 'auto' }}
        >
          <Heading
            as='h1'
            size='3xl'
            color='yellow.100'
            marginX='auto'
            marginBottom={4}
            _after={{
              content: '"."',
              color: 'brand.500',
            }}
          >
            Explore the world with online experiences
          </Heading>
          <Heading as='h2' size='lg' color='yellow.50' mx='auto'>
            Unique online cooking classes & workshops with passionate hosts, live from their kitchen.
          </Heading>
        </Box>

        <Box>
          <Box bg='white' borderRadius={4} p={4}>
            <Stack spacing={3} direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-end' }}>
              <FormControl id='query'>
                {isLargerThanMd && <FormLabel>What are you looking for?</FormLabel>}
                <Input placeholder='Search city, host, experience' size='lg' id='query' autoComplete='off' />
              </FormControl>
              <FormControl id='date'>
                {isLargerThanMd && <FormLabel>When are you available?</FormLabel>}
                <Input placeholder='Date' size='lg' id='date' autoComplete='off' />
              </FormControl>
              <FormControl id='seats'>
                {isLargerThanMd && <FormLabel>How many guests are going?</FormLabel>}
                <Select placeholder='Seats' size='lg' id='seats'>
                  <option value={1}>1 seats</option>
                  <option value={2}>2 seats</option>
                  <option value={3}>3 seats</option>
                </Select>
              </FormControl>
              <Button colorScheme='brand' variant='solid' size='lg' minWidth={24}>
                Search
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
