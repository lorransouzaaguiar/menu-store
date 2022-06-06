import {Flex, Center, Text, Divider} from '@chakra-ui/react'

const CartFooterItem = (props) => {
    return (
        <>
            <Flex>
                <Center 
                    h='50px' 
                    bgColor='gray' 
                    w='40%' 
                >
                    <Text>{props.title}</Text>
                </Center>
                <Center 
                    h='50px'
                    bgColor='gray.800' 
                    w='60%' >
                    <Text>{'R$ ' + props.value}</Text>
                </Center>
            </Flex>
            {
                props.divider ? <Divider/> : null
            }
        </>
    )
}

export default CartFooterItem