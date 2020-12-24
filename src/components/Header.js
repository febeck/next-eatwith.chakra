import * as React from 'react'
import { Box, Button, Flex, Image, HStack, Link } from '@chakra-ui/react'

export function Header() {
  return (
    <Box as='header' w='100%' h={16} bg='gray.200'>
      <Flex justify='space-between' align='center' h='100%' px={4}>
        <Image src='logo-eatwith.svg' h={12} />
        <HStack spacing={4}>
          <Link>Become a host</Link>
          <Link>Gift cards</Link>
          <Link>Login</Link>
          <Button as={Link} colorScheme='brand' variant='solid'>
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
