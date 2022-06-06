import {ArrowDownIcon} from '@chakra-ui/icons'
import { Flex, Button, Collapse, useDisclosure, Box } from "@chakra-ui/react"

const CartModalItem = () => {
    const {isOpen, onToggle} = useDisclosure()

    return (
        <Flex>
            <Button 
                variant='cart'
                rightIcon={<ArrowDownIcon/>} 
                onClick={onToggle}
            >Categorias do Cardápio</Button>
            <Collapse
                in={isOpen}
                animateOpacity
                bgColor='gray'
            >
                <Box h='200px' bgColor='gray'></Box>
            
            </Collapse>
        </Flex>
    )
}

export default CartModalItem