import {Button, Container, Input, InputGroup, InputLeftElement, Text, Box, Alert, AlertTitle, VStack} from "@chakra-ui/react"
import {Modal,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from "@chakra-ui/react"
import {useState, useContext, useEffect} from 'react'
import { signIn } from "../../../../firebase/auth"
import { Store } from "../../../../store/store"

const SignIn = (props) => {
    const [inputEmail, setInputEmail] = useState()
    const [inputPassword, setInputPassword] = useState()
    const [textError, setTextError] = useState(undefined)
    const {state, dispatch} = useContext(Store)
    const {user} = state

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <Text color='red'>Acessar minha Conta</Text>
                    <ModalCloseButton onClick={() => setTextError(undefined)}/>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Text>Seja bem vindo!Informe seus dados para entrar</Text>
                    </Container>
                    <VStack spacing='10px'>
                        <InputGroup>
                            <Input 
                                placeholder='Seu Email' 
                                onChange={(e) => setInputEmail(e.target.value)}
                            />
                            <InputLeftElement/>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                placeholder='Sua Senha' 
                                type='password' 
                                onChange={(e) => setInputPassword(e.target.value)}/>
                            <InputLeftElement/>
                        </InputGroup>
                    </VStack>
                    {
                        textError ? <Text color='red'>Erro ao logar usuario</Text> : null
                    }
                </ModalBody>
                <ModalFooter>
                    <Button onClick={ async() => {
                        await signIn(inputEmail, inputPassword, dispatch)
                        if(user.current) {
                            props.onClose() 
                            setTextError(undefined) 
                        } else setTextError('Erro ao logar usuário') 
                    }}
                    >Entrar</Button>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default SignIn