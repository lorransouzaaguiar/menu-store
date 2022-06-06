import {Heading, Center, Box, InputGroup, Input, InputRightElement} from "@chakra-ui/react"
import {SearchIcon} from '@chakra-ui/icons'
import { useContext, useState} from "react"
import CardItem from "./cardItem"
import Image from 'next/image'
import { Store } from "../../../store/store"

const MainContent = () => {
    const {state} = useContext(Store)
    const products = state?.products
    const [input, setInput] = useState({'molho': [], 'hashi': []})

    const handleIput = (e) => {
        const value = isNaN(e.target.value) ? e.target.value : undefined
        const exp = /\w\D/
        const rules = new RegExp(exp)
        if(rules.test(value)){
            console.log(rules.test(value))
            setInput(value)
            
        }else{
            console.log(rules.test(value))
            setInput(undefined)
        }
        
    }
    
    return(
        <>
            <Box 
                display={['flex', 'flex', 'none', 'none']}
                position='relative'
                width='full' 
                height='300px'
            >
                <Image src='/banner.jpg' layout='fill' objectFit='cover'/>
            </Box>
                <InputGroup 
                    bgColor='white' 
                    mt='5px' 
                    mb='5px'
                    display={['flex', 'flex', 'none', 'none']}
                >
                    <Input placeholder='Procurar no cardápio...' onChange={handleIput}/>
                    <InputRightElement  children={<SearchIcon/>}/>
                </InputGroup>
            <Box>
                <Center 
                    bgColor='red.600'
                    position='sticky' 
                    top='0'
                    zIndex='10'
                >
                    <Heading as='h2' p='10px'>Cardápio</Heading>
                </Center>
                <Box>
                    <Heading as='h3' mt='10px'>Molho</Heading>
                    {products ? products.molho.map(item => <CardItem key={item.id} data={item}/>): null}      
                </Box>
                <Box>
                    <Heading as='h3' mt='10px'>Hashi</Heading>
                    {products ? products.hashi.map(item => <CardItem key={item.id} data={item}/>): null}         
                </Box>
            </Box>
        </>
    )
}

export default MainContent