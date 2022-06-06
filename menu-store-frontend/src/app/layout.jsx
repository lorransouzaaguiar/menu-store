import {Grid} from '@chakra-ui/react'
import Header from './components/header/header'
import Aside from './components/aside/aside'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Menu from './components/menu'

const Layout = () => {
    const area = "'header header''menu menu''main aside''footer footer'"
    const areaMobile = "'header header''menu menu''main main' '. .'"

    return (
        <Grid
            templateAreas={[areaMobile, areaMobile, area, area]}
            templateColumns='60% 40%'
        >
            <Header/>
            <Menu/>
            <Main/>
            <Aside/>
            <Footer/>
        </Grid>
    )
}

export default Layout