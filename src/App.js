import { VStack , Flex, Heading, IconButton , Spacer, Icon} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode";
import {FaSun, FaMoon, FaGithub} from "react-icons/fa";

function App() {

  const {colorMode, toggleColorMode} = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w='100%'>
        <Heading
        ml='3' size='md' fontWeight='semibold' color='blue.400'>dyl-kh</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaGithub/>} isRound='true'></IconButton>
        <IconButton ml='8' icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
    </VStack>
  );
}

export default App;
