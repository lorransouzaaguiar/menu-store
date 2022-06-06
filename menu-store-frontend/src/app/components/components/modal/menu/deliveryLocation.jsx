import {Table, Tbody, Td, Text, Tr, VStack} from '@chakra-ui/react'
import Image from 'next/image'
import CustomModalMenu from './components/customModalMenu'

const DeliveryLocation = (props) => {

    return (
       <CustomModalMenu 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            title='Locais de Entrega'
        >
           <VStack spacing='10px' align='start'>
                <Text color='gray'>Verifique se entregamos na sua região:</Text>
                <Table variant='striped'>
                    <Tbody>
                        lista de Bairros
                    </Tbody>
                </Table>
            </VStack>
       </CustomModalMenu>
    )
}

export default DeliveryLocation