import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout"
import Image from 'next/image'
import { useContext } from "react"
import ItemCartObservation from "../../components/modal/cart/itemCartObservation"
import {Store} from '../../../store/store'

const CardItem = (props) => {
    const item = props.data
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Box>
            <Flex 
                h='200px' 
                bgColor='white'
                mt='10px'
                mb='10px'
            >
                <Image src={item.imgUrl} width={250} height={200}/>
                <Flex 
                    direction='column' 
                    justifyContent='space-between' 
                    p='15px'
                    w='full'
                >
                    <Container >
                        <Heading as='h4' variant='cardItem-title'>{item.title}</Heading>
                        <Text as='span'color='gray.500' fontWeight='none'>{item.description}</Text>
                    </Container>
                    <Button 
                        textTransform='uppercase'
                        h='50px'
                        w='full'
                        onClick={() => onOpen()}
                    >Por Apenas R$ {item.price}
                    </Button>
                </Flex>
            </Flex> 
            <ItemCartObservation data={item} isOpen={isOpen} onClose={onClose}/>
       </Box>
    )
}

export default CardItem