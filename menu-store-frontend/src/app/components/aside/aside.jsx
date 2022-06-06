import {Box} from "@chakra-ui/react"
import Cart from "../components/cart/cart"

const Aside = () => {
    return (
        <Box 
            display={['none', 'none', 'flex', 'flex']}
            as='aside'
            gridArea='aside'
            pr={['','','5%','5%']}
            ml={['', '', '15px', '15px']}
            mt='10px'
            mb='20px'
        >
            <Cart/>
        </Box>
    )
}

export default Aside