import {Button, Box, HStack, Tabs, TabList, Tab, TabPanels, TabPanel, useDisclosure} from '@chakra-ui/react'
import { useContext } from 'react'
import { Store } from '../store/store'
import Cart from './components/cart/cart'
import DeliveryLocation from './components/modal/menu/deliveryLocation'
import OpeningHours from './components/modal/menu/openingHours'
import PaymentModal from './components/modal/menu/paymentMethod'
import MainContent from './main/components/mainContent'

const Menu = () => {
    const paymentModal = useDisclosure()
    const deliveryLocation = useDisclosure()
    const openingHours = useDisclosure()
    const {state, dispatch} = useContext(Store)

    return (
        <Box 
            gridArea='menu'
            as='nav'
            h={['', '', '80px', '80px']}
        >
            <Tabs 
                w='100vw' 
                display={['', '', 'none', 'none']}
                index={state.menu.tabIndex}
                onChange = {(index) => dispatch({
                    reducer: 'MENU',
                    payload: index,
                })}   
                variant='unstyled'
            >
                <TabList 
                    display='flex' 
                    justifyContent='center' 
                    border='none' 
                    bgColor='gray.700'
                >
                        <Tab _selected={{color: 'red.600', boxShadow: 'none'}} color='white'>Cardápio</Tab>
                        <Tab _selected={{color: 'red.600', boxShadow: 'none'}} color='white'>Promoções</Tab>
                        <Tab _selected={{color: 'red.600', boxShadow: 'none'}} color='white'>Carrinho</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <MainContent/>
                    </TabPanel>
                    <TabPanel>2</TabPanel>
                    <TabPanel>
                        <Cart/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
      
            <HStack spacing='10px'
                pt='20px'
                pb='20px'
                pl='15%'
                display={['none', 'none', 'flex', 'flex']}
                bgColor='gray.700'
            >
                <Button 
                    variant='menu' 
                    onClick={() => paymentModal.onOpen()}
                >Formas de Pagamento</Button>
                <Button 
                    variant='menu' 
                    onClick={() => deliveryLocation.onOpen()}
                >Locais de Entrega</Button>
                <Button 
                    variant='menu'
                    onClick={() => openingHours.onOpen()}
                >Horario de Funcionamento</Button>
            </HStack>

            <PaymentModal isOpen={paymentModal.isOpen} onClose={paymentModal.onClose}/>
            <DeliveryLocation isOpen={deliveryLocation.isOpen} onClose={deliveryLocation.onClose}/>
            <OpeningHours isOpen={openingHours.isOpen} onClose={openingHours.onClose}/>
        </Box>
    )
}

export default Menu
