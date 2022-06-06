import { Button, Grid, Flex, Text } from "@chakra-ui/react"
import {ModalHeader, ModalFooter, ModalCloseButton, ModalBody, ModalContent, Modal} from '@chakra-ui/react'
import { useContext} from "react"
import CardData from "./components/cardData"
import { Store } from "../../../../store/store"
import {useMyData} from './useMyData'
import {updateUserData} from "../../../../firebase/data"

const MyData = (props) => {
    const {state, dispatch} = useContext(Store)
    const data = Object.entries(state.user.data)
    const [inputState, inputDispatch] = useMyData()

    return (
        <Modal 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
        >
            <ModalContent p='10px' maxW='80%'>
                <ModalHeader bgColor='gray.600'>
                    <Flex justifyContent='space-between'>
                        <Text>Meus Dados</Text>
                        <ModalCloseButton/>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Grid templateColumns="50% 50%" gap='20px'>
                        {data ? data.map(item => {
                            return <CardData 
                                key={item[0]} 
                                data={item} 
                                dispatch={inputDispatch} /> 
                        }) : null}
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.onClose} w='50%' m='5px'>Fechar Janela</Button>
                    <Button w='50%' m='5px' onClick={async () => {
                        await updateUserData({...inputState}, dispatch)
                        props.onClose()
                    }}>Salvar alterações</Button>
                </ModalFooter>
            </ModalContent>
        </Modal> 
    )
}

export default MyData