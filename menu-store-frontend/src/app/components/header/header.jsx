import { useDisclosure } from "@chakra-ui/hooks"
import { Flex, Button, Box, Text, Center, Heading} from "@chakra-ui/react"
import CustomDrawer from '../drawer'
import {useContext, useRef} from 'react'
import Image from 'next/image'
import SignUp from "../components/modal/auth/signUp"
import SignIn from "../components/modal/auth/signIn"
import { Store } from "../../store/store"
import MyData from "../components/modal/userData/myData"
import { signOut } from "../../firebase/auth"

const Header = () => {
    const drawer = useDisclosure()
    const drawerRef = useRef()
    const signUpModal = useDisclosure()
    const signInModal = useDisclosure()
    const myData = useDisclosure()
    const myRequests = useDisclosure()
    const {state, dispatch} = useContext(Store)
    const currentUser = state.user.current

    return (
        <Flex 
            gridArea='header'
            as='header'
            direction={['row', 'row', 'column', 'column']}
            justifyContent='center' 
            pos='relative'
            h={['','', '600px', '600px']}
        >
            <Center>
                <Box display={['none', 'none', 'flex', 'flex']}>
                    <Image
                        src='/logo.jpg'
                        width={150}
                        height={150}
                    />
                </Box>
                <Heading 
                    as='h1'
                    display={['flex', 'flex', 'none', 'none']}
                >Sushi House</Heading>
            </Center>
            <Box 
                display={['none', 'none', 'flex', 'flex']} 
                w='100%' 
                h='400px'
                pos='relative'
            >
                <Image src='/banner.jpg' layout='fill' objectFit='cover'/>
            </Box>
            <Flex 
                display={['none', 'none', 'flex', 'flex']}
                ml='15%'
                w='70%'
                pt='20px'
                pb='20px'
                justifyContent='space-between'
            >
                {
                    currentUser ? 
                        <Box w='50%'>
                            <Text as='span'>Boa noite {state.user.data.name}, estamos abertos</Text>
                            <Flex pt='10px' justifyContent='space-between' h='80%'>
                                <Button variant='header-login' onClick={myData.onOpen}>Meus dados</Button>
                                <Button variant='header-login' onClick={myRequests.onOpen}>Meus pedidos</Button>
                                <Button variant='header-login' onClick={async () => {
                                    await signOut(dispatch)
                                }}>Sair</Button>
                            </Flex>
                        </Box>: 
                        <Box w='50%'>
                            <Text as='span'>Boa noite, estamos abertos</Text>
                            <Flex pt='10px' justifyContent='space-between' h='80%'>
                                <Button variant='header-logout' onClick={signInModal.onOpen}>Entrar</Button>
                                <Text as='span' fontSize='2em'>ou</Text>
                                <Button variant='header-logout' onClick={signUpModal.onOpen}>Cadastre-se</Button>
                            </Flex>
                        </Box>
                }
                <Flex direction='column' ml='50px'>
                    <Text as='span' fontSize='xl'>Estamos em Campos dos Goytacazes - RJ</Text>
                    <Text as='span' fontSize='40px'>(22) 9991-06363</Text>
                </Flex>
            </Flex>
            <Button 
                display={['flex', 'flex', 'none', 'none']}
                onClick={drawer.onOpen} ref={drawerRef} 
                pos='absolute' 
                right='0'
                zIndex='1000'
            >abrir</Button>
            <CustomDrawer open={drawer.isOpen} close={drawer.onClose} drawerRef={drawerRef}/>
            <SignUp isOpen={signUpModal.isOpen} onClose={signUpModal.onClose}/>
            <SignIn isOpen={signInModal.isOpen} onClose={signInModal.onClose}/>
            <MyData isOpen={myData.isOpen} onClose={myData.onClose}/>
        </Flex>
    )
}

export default Header