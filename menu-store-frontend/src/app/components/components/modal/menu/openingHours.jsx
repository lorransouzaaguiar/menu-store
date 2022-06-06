import {Table, Tbody, Text, VStack} from '@chakra-ui/react'
import CustomModalMenu from './components/customModalMenu'

const OpeningHours = (props) => {

    return (
       <CustomModalMenu 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            title='Horário de Funcionamento'
        >
           <VStack spacing='10px' align='start'>
                <Text color='gray'>Abrimos nos seguintes dias e horários:</Text>
                <Table variant='striped'>
                    <Tbody>
                        lista de Horarios
                    </Tbody>
                </Table>
            </VStack>
       </CustomModalMenu>
    )
}

export default OpeningHours