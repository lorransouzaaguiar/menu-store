import {Flex} from "@chakra-ui/layout"
import CardData from "./components/cardData"

const Footer = () => {
    return (
        <Flex 
            display={['none', 'none', 'flex', 'flex']}
            gridArea='footer'
            as='footer'
            h='300px'
            justifyContent='space-evenly'
            
            borderTop='3px solid grey'
        >
            <CardData 
                title='fale conosco' 
                list={['Telefone: (22) 9991-06363', 'sushihouse@agenciaoptimus.com.br']}
            />
            <CardData 
                title='Formas de pagamento' 
                list={['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito', 'Ticket Restaurante']}
            />
            <CardData 
                title='Sushi House' 
                list={['Locais de entrega', 'Formas de Pagamento', 'Termos de Uso', 'Termos de Uso e Privacidade']}
            />
            <CardData 
                title='Funcionamento' 
                list={[
                    'Segunda 18:00h às 23:39hrs', 
                    'Terça 18:00h às 23:42hrs', 
                    'Quarta 18:00h às 23:42hrs', 
                    'Quinta 18:00h às 23:40hrs', 
                    'Sexta 21:40h às 23:59hrs', 
                    'Sábado 18:00h às 23:59hrs', 
                    'Domingo 18:00h às 23:59hrs', 
                ]}
            />
        </Flex>
    )
}

export default Footer