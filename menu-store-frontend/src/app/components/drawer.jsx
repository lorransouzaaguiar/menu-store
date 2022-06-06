import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@chakra-ui/modal"
import {Button, ButtonGroup, Flex, HStack, VStack} from '@chakra-ui/react'
import Image from 'next/image'

const CustomDrawer = (props) => {
    return (
        <Drawer 
            isOpen={props.open} 
            placement='left' 
            finalFocusRef={props.drawerRef} 
            
        >
            <DrawerContent w='50px' bgColor='black' p='0'>
                <DrawerHeader position='relative'>
                    <VStack spacing='10px'>
                        <Image src='/logo.jpg' width='150px' height='150px'/>
                        <HStack w='full'>
                            <Button w='50%'>Entrar</Button>
                            <Button w='50%'>Cadastre-se</Button>
                        </HStack>
                        <Button 
                            onClick={props.close} 
                            position='absolute' 
                            top='0' 
                            right='0'
                        >fechar</Button>
                    </VStack>
                </DrawerHeader>
                <DrawerBody>
                    <Button>Horario</Button>
                    <Button>Formas de Pagamento</Button>
                    <Button>Fale conosco</Button>
                    <Button>Temos e Condições</Button>
                </DrawerBody>
                <DrawerFooter>
                    Sushi House
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer