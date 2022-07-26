
import { Stack,Box, Text, Flex} from '@chakra-ui/react';
import React from 'react'

function Header() {
  return (
    <Stack>
        <Flex direction='column' alignSelf='flex-start'>
            <Box>
                <Text fontSize='3xl' fontWeight='semibold' align='flex-start'>Hello, I am</Text>
                <Text fontSize='5xl' fontWeight='semibold' align='flex-start'
                bgGradient='linear(to-r, blue.400, aqua)' bgClip='text'>Dylan Khan</Text>
                <Text>A Computer Science student at RMIT University in my penultimate year!</Text>
            </Box>
        </Flex>
    </Stack>
  )
}

export default Header