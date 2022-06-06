import { Box, Button, Container, Flex, Input, InputGroup, InputLeftElement, Link, Text, VStack } from "@chakra-ui/react"
import {Modal,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { signUp } from "../../../../firebase/auth"
import {User} from '../../../../model/user'
import { Store } from "../../../../store/store"

const SignUp = (props) => {
    const [inputName, setInputName] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputPassword, setInputPassword] = useState()
    const [inputPhone, setinputPhone] = useState()
    const [inputRepeatPassword, setinputRepeatPassword] = useState()
    const [errMessage, setErrMessage] = useState(undefined) 
    const {dispatch} = useContext(Store)

    const clearFields = () => {
        setInputName(undefined)
        setInputEmail(undefined)
        setInputPassword(undefined)
        setinputRepeatPassword(undefined)
        setErrMessage(undefined)
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <Flex justifyContent='space-between'>
                        <Text color='red'>Cadastre-se</Text>
                        <ModalCloseButton/>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <VStack spacing='10px'>
                        <InputGroup>
                            <Input 
                                placeholder='Nome' 
                                onChange={(e) => setInputName(e.target.value)}
                            ></Input>
                            <InputLeftElement/>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                placeholder='Email' 
                                onChange={(e) => setInputEmail(e.target.value)}
                            ></Input>
                            <InputLeftElement/>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                placeholder='Celular'
                                onChange={(e) => setinputPhone(e.target.value)}
                            />
                            <InputLeftElement/>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                placeholder='Senha' 
                                onChange={(e) => setInputPassword(e.target.value)}
                                type='password'
                            />
                            <InputLeftElement/>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                placeholder='Repita Senha'
                                onChange={(e) => setinputRepeatPassword(e.target.value)}
                                type='password'
                            />
                            <InputLeftElement/>
                        </InputGroup>
                    </VStack>
                    {errMessage ? <Text color='red'>{errMessage}</Text> : null}
                </ModalBody>
                <ModalFooter>
                    <Container>
                        <Text>Ao se cadastrar você concorda com nossos</Text>
                        <Link>"Termos e Condições de Uso e Privacidade"</Link>
                    </Container>
                    <Button onClick={async () => {
                        if(inputRepeatPassword !== inputPassword){
                            setErrMessage('Senhas não conferem')
                        }else {
                            const user = {
                                name: inputName, 
                                email: inputEmail, 
                                password: inputPassword, 
                                cel: inputPhone, 
                                tel: '', 
                                adress: ''}
                            await signUp(user, dispatch)
                            props.onClose()   
                            clearFields()
                        }
                    }}>Cadastrar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default SignUp