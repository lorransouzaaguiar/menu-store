import {GridItem, Box, InputGroup, InputRightElement, Text, Input} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const CardData = (props) => {
    const [title, data] = props.data
    const dispatch = props.dispatch
    const [inputValue, setInput] = useState(data)

    useEffect(() => {
        dispatch({type: title, payload: inputValue})
    }, [inputValue])

    return (
        <GridItem>
            <Box>
                <Text p='10px' bgColor='gray.600' textTransform='uppercase'>{title}</Text>
                <InputGroup>
                    <Input 
                        value={inputValue} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <InputRightElement/>
                </InputGroup>
            </Box>
        </GridItem>
        
    )
}

export default CardData