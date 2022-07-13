import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import { useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
    const params = useParams()

    return (
        <>
            <Header />
            <AppBar />
        </>
    )
}
