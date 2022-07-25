import { VStack , Flex, Heading, IconButton , Spacer, DrawerFooter} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode";
import {FaSun, FaMoon, FaGithub} from "react-icons/fa";

import React, { useEffect} from "react";

import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer"

function App() {

  const {colorMode, toggleColorMode} = useColorMode();

  const isDark = colorMode === 'dark';

  useEffect(() => {
    document.title = "Dylan Khan";  
  }, []);
  

  return (
    <Flex direction="column" minH={'100vh'}>
    <VStack p={5} spacing='50px' >
      <Flex w='100%'>
        <Heading
        ml='3' size='md' fontWeight='semibold' color='blue.400'>dyl-kh</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaGithub/>} isRound='true' onClick={() => window.open('https://github.com/dyl-kh')}/>
        <IconButton ml='8' icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header/>
      <Works/>
    </VStack>
      <Footer/>
      </Flex>
      
    
  );
}

export default App;
