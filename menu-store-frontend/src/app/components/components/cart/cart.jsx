import { Box, Button, Center, Flex, Text} from "@chakra-ui/react"
import { useContext } from "react"
import CartFooterItem from "./components/cartFooterItem"
import CartItem from "./components/cartItem"
import CartModalItem from "./components/cartModalItem"
import { Store } from "../../../store/store"
import sendWhatsapp from "../../../whatsapp/config"
import Image from 'next/image'

const Cart = () => {
    const {state} = useContext(Store)
    const {products, subtotal, deliveryFee, purchaseFee} = state.cart

    return (
        <Flex 
            direction='column'
            justifyContent='space-between'
            w={['', '', '70%', '70%']} 
            h={['85vh', '85vh', '98vh', '98vh']}
            border='5px solid'
            borderColor='gray.500'
            position='sticky'
            top={['none', 'none', '5px', '5px']}
        >
            <Flex display={['none', 'none', 'block', 'block']}>
                <CartModalItem/>
                <Button 
                    variant='cart-green' 
                    onClick={() => {
                        sendWhatsapp(products, deliveryFee, purchaseFee)
                    }}>finalizar meu pedido</Button>
            </Flex>
            <Box 
                h='full' 
                overflowY='scroll' 
                pt='10px'
            >
                {products.length > 0 ? 
                    products.map(item => <CartItem key={item.id} data={item}/>): 
                    <Flex direction='column' h='full' justifyContent='center'>
                        <Image src='/cart-logo.png' height={150} width={100} objectFit='contain'/>
                        <Text textAlign='center'>Carrinho vazio</Text>
                    </Flex>
                }
            </Box>
            <Box>
                <CartFooterItem title='Subtotal' value={subtotal} divider={true}/>
                <CartFooterItem title='Taxa de Entrega' value={deliveryFee} divider={true}/>
                <CartFooterItem title='Taxa da Compra' value={purchaseFee} divider={false}/>
            </Box>
            <Button 
                display={['flex', 'flex', 'none', 'none']}
                variant='cart-green'
                onClick={() => {
                    sendWhatsapp(products, deliveryFee, purchaseFee)
                }}
            >finalizar meu pedido</Button>
        </Flex>
    )
}

export default Cart