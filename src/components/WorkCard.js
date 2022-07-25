import React from 'react'
import {Box, Image, Text, Heading} from '@chakra-ui/react'


function WorkCard(props) {
  const {title, info, img, imgAlt, link} = props;

  function onClick(){
    window.open(link);
  }

  return (
    <Box w='xs' overflow='hidden' onClick={onClick} cursor='pointer'
    _hover={{transform:'scale(1.05)'}} transition='all 100ms ease-in-out'>
    <Image src={img} alt={imgAlt} borderRadius='lg'></Image>
    <Box p='5px'>
        <Heading fontSize='2xl' fontWeight='semibold' align='center'>{title}</Heading>
        <Text align='center' fontSize='xl'>{info}</Text>
      </Box>
    </Box>
  )
}

export default WorkCard