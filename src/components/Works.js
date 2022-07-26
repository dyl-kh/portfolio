import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {Box, Flex , Heading} from '@chakra-ui/react'
import WorkCard from './WorkCard'

import calculatorImg from '../images/calculator.png';
import tictactoeImg from '../images/tictactoe.png';
import memoryImg from '../images/memory.png';

function Works() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')

  return (
        <Flex direction='column'
        w='100%' maxW={'100vw'}>
            <Box alignSelf='center'>
                <Heading fontSize='4xl' fontWeight='semibold' color='blue.400'>My Work</Heading>
            </Box>
            <Box alignSelf='center'>
                <Flex direction = {isNotSmallerScreen ? 'row' : 'column'} mt={8} gap='20px'
                flexWrap='wrap' justifyContent={'center'}>
                    <WorkCard title='Calculator' info='A simple calculator' img={calculatorImg}
                    imgAlt='An image of a calculator' link='https://dyl-kh.github.io/simple-calculator/'/>

                    <WorkCard title='Tic-Tac-Toe' info='A fun game for two players' img={tictactoeImg} 
                    imgAlt='An image of a tic-tac-toe board' link='https://dyl-kh.github.io/tic-tac-toe/'/>
                    
                    <WorkCard title='Memory Game' info='Challening game of memory' img={memoryImg} 
                    imgAlt='An image of the memory game' link='https://dyl-kh.github.io/memorygame/'/>

                </Flex>
            </Box>
        </Flex>
  )
}

export default Works