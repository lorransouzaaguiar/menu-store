import {Table, Tbody, Td, Text, Tr, VStack} from '@chakra-ui/react'
import Image from 'next/image'
import CustomModalMenu from "./components/customModalMenu"

const PaymentModal = (props) => {

    return (
       <CustomModalMenu 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            title='Formas de Pagamento'
        >
           <VStack spacing='10px' align='start'>
                <Text color='gray'>As seguintes formas de pagamentos são aceitas:</Text>
                <Table variant='striped'>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Image 
                                    src='/paymentMethod/debito.png' 
                                    width='50px' height='30px'/>
                            </Td>
                            <Td>Cartão de débito</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image 
                                    src='/paymentMethod/credito.jpg' 
                                    width='50px' height='30px'/>
                            </Td>
                            <Td>Cartão de Crédito</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image 
                                    src='/paymentMethod/ticket.png' 
                                    width='50px' height='30px'/>
                            </Td>
                            <Td>Ticket Restaurante</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Image 
                                    src='/paymentMethod/dinheiro.png' 
                                    width='50px' height='30px'/>
                            </Td>
                            <Td>Dinheiro</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </VStack>
       </CustomModalMenu>
    )
}

export default PaymentModal