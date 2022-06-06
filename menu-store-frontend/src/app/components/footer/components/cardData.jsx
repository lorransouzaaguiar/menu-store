import { Box, ListItem, Heading, Divider, UnorderedList } from "@chakra-ui/layout"
import { list } from "@chakra-ui/styled-system"

const CardData = (props) => {

    return (
        <Box>
            <Heading 
                as='h4' 
                fontSize='md' 
                pt='20px'
                pb='20px'
                color='red'
                fontWeight='none'
            >{props.title}</Heading>
            <Divider/>
            <UnorderedList 
                listStyleType='none' 
                m='0'
                pt='10px'
            >
                {props.list.map(item => {
                    return <ListItem 
                        key={props.list.indexOf(item)}
                        fontSize='sx' 
                        p='1px' 
                        color='white'
                        >{item}</ListItem>
                })}
            </UnorderedList>
        </Box>
    )
}

export default CardData