import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import { useParams } from 'react-router-dom'
import style from './ProductDetailsPage.module.css'
import QuantityButton from '@Menu/components/QuantityButton/QuantityButton.js'
import { useContext } from 'react'
import { MenuContext } from '@Menu/context/menu-context'
import { useSelectorGetOneProduct } from '@Menu/store/selectors'

export default function ProductDetailsPage(props) {
    const { productId } = useParams()
    const { state } = useContext(MenuContext)
    const product = useSelectorGetOneProduct(state, productId)

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.details}>
                <img className={style.image} src={product.imageUrl} />
                <div className={style.content}>
                    <h1 className={style.title}>{product.title}</h1>
                    <p className={style.description}>{product.description}</p>
                    <span
                        className={style.price}
                    >{`Por Apenas ${product.price}`}</span>
                    <h3 className={style.subTitle}>Alguma Observação?</h3>
                    <div className={style.observation}>
                        <h4 className={style.title}>
                            Ex: Tirar a cebola, maionese, ponto da carne, etc
                        </h4>
                    </div>
                </div>
                <div className={style.footer}>
                    <QuantityButton quantity="1" />
                    <button className={style.addButton}>
                        <h4 className={style.add}>Adicionar</h4>
                        <span className={style.info}>{`${product.price}`}</span>
                    </button>
                </div>
            </section>
        </>
    )
}
