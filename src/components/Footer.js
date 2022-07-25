import React from 'react'
import { Box , Text, Flex, useColorMode, IconButton, Spacer} from '@chakra-ui/react';

import {AiFillMail} from 'react-icons/ai'

const Footer = () => {

    const {colorMode} = useColorMode();
    const isDark = colorMode === 'dark';
    

  return (
    <Box bgColor={isDark? 'gray.700' : 'gray.100'} w='100vw' mt={'auto'} p='5px'>
        <Flex justify={'center'} align='center' gap={'10px'}>
            <Text>Copyright © 2022 Dylan Khan</Text>
            <IconButton icon={<AiFillMail/>} isRound='true' onClick={() => window.location = 'mailto:dylanjkhan@hotmail.com'}/>
        </Flex>
    </Box>
  )
}

export default Footer