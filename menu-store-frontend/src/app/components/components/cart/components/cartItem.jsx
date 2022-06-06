import { Box, Flex, HStack , Button, Text} from "@chakra-ui/react"
import { useContext } from "react"
import { Store } from "../../../../store/store"

const CartItem = (props) => {
    const item = props.data
    const {dispatch} = useContext(Store)
    
    return (
        <Box mb='10px' p='0 5px'>
            <Flex 
                bgColor='red.600' 
                justifyContent='space-between' 
                alignItems='center'
                pl='10px'
            >
                <Text>{item.title}</Text>
                <Button onClick={() => dispatch({
                        reducer: 'CART', 
                        type: 'REMOVE_ITEM', 
                        payload: item})
                }>X</Button>
            </Flex>
            <Flex justifyContent='space-between' p='10px' bgColor='gray.700'>
                <HStack>
                    <Button 
                        onClick={() => 
                            dispatch({
                                reducer: 'CART', 
                                type: 'ADD_ITEM', 
                                payload: item 
                            })}
                    >+</Button>
                    <Text>{item.qty}</Text>
                    <Button 
                        onClick={() => dispatch({
                            reducer: 'CART', 
                            type: 'DECREMENT_ITEM', 
                            payload: item}
                        )}
                    >-</Button>
                </HStack>
                <HStack>
                    <Text>Valor: </Text>
                    <Text>{'R$ ' + item.totalPriceByItem}</Text>
                </HStack>
            </Flex>
        </Box>
    )
}

export default CartItem