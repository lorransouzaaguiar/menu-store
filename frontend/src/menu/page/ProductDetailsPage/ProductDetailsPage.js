import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import { useParams } from 'react-router-dom'
import ProductBannerJpg from '@App/assets/banner-sashimi.jpg'
import style from './ProductDetailsPage.module.css'
import QuantityButton from '@App/components/QuantityButton/QuantityButton.js'

export default function ProductDetailsPage(props) {
    const params = useParams()

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.details}>
                <img className={style.image} src={ProductBannerJpg} />
                <div className={style.content}>
                    <h1 className={style.title}>{'Temaki'}</h1>
                    <p className={style.description}>{'unidade'}</p>
                    <span
                        className={style.price}
                    >{`Por Apenas R$ ${'45,00'}`}</span>
                    <h3 className={style.subTitle}>Alguma Observação?</h3>
                    <div className={style.observation}>
                        <h4 className={style.title}>
                            Ex: Tirar a cebola, maionese, ponto da carne, etc
                        </h4>
                    </div>
                </div>
                <div className={style.footer}>
                    <QuantityButton />
                    <button className={style.addButton}>
                        <h4 className={style.add}>Adicionar</h4>
                        <span className={style.info}>{`R$ ${'45,00'}`}</span>
                    </button>
                </div>
            </section>
        </>
    )
}
