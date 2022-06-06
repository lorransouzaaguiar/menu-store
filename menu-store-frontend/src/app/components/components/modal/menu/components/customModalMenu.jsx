import { Modal, ModalHeader, ModalContent, ModalBody } from "@chakra-ui/modal"
import {Button, Text} from '@chakra-ui/react'

const CustomModalMenu = (props) => {

    return (
        <Modal 
            isOpen={props.isOpen} 
            onClose={props.onClose}
        >
            <ModalContent h='70%'>
                <ModalHeader>
                    <Text as='h3' color='gray'>{props.title}</Text>
                </ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <Button 
                    background='red.600'
                    m='10px'
                    _hover='none'
                    color='white'
                    onClick={() => props.onClose()}
                >Fechar</Button>
            </ModalContent>
        </Modal>
    )
}

export default CustomModalMenu