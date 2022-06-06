import {Flex} from "@chakra-ui/react"

import MainContent from "./components/mainContent"

const Main = () => {
    
    return (
        <Flex 
            gridArea='main'
            direction='column'
            as='main' 
            pl={['','','25%','25%']}
            mb='20px'
            mt={['', '', '10px', '10px']}
            display={['none', 'none', 'flex', 'flex']}
        >
            <MainContent/>
        </Flex>
    )
}

export default Main
