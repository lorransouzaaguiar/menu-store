import { 
    Text, 
    Textarea, 
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    HStack
} from "@chakra-ui/react"
import { Store } from "../../../../store/store"
import {useContext, useState} from 'react'


const ItemCartObservation = (props) => {
    const item = props.data
    const {dispatch} = useContext(Store)
    const [input, setInput] = useState()

    const setItem = () => {
        item.observation = input
        dispatch({
            reducer: 'CART',
            type: 'ADD_ITEM',
            payload: {...item}
        })
        props.onClose()

        dispatch({
            reducer: 'MENU',
            payload: 2
        })
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <ModalContent 
                maxW={['100vw', '100vw', '80%','80%']} 
                h={['100vh', '100vh', '80%', '80%']}
            >
                <ModalHeader>
                    <Text bgColor='red.600' p='10px'>{item.title}</Text>
                    <Text 
                        bgColor='gray.200' 
                        color='gray.600' 
                        p='10px'
                    >Faça um Comentário:</Text>
                </ModalHeader>
                <ModalBody>
                    <Textarea 
                        placeholder='Deseja Adicionar alguma Observação?'
                        h='200px'
                        onChange={(e) => setInput(e.target.value)}
                    ></Textarea>
                </ModalBody>
                <ModalFooter>
                    <HStack w='full'>
                        <Button w='50%' onClick={() => props.onClose()}>Cancelar</Button>
                        <Button 
                            w='50%' 
                            bg='green.400' 
                            _hover={{bg: 'green.600'}}
                            onClick={() => setItem()}
                        >Pronto! Adicionar ao pedido</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ItemCartObservation