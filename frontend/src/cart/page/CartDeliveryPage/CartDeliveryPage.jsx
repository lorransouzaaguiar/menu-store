import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import style from './CartDeliveryPage.module.css'
import SectionItem from '@Cart/components/SectionItem/SectionItem'
import MoneySvg from '@App/assets/dinheiro.svg'
import MastercardSvg from '@App/assets/mastercard.svg'
import VisaSvg from '@App/assets/visa.svg'
import PaymentCard from '@Cart/components/PaymentCard/PaymentCard'
import CartButton from '@Cart/components/CartButton/CartButton'
import LocalSvg from '@App/assets/local.svg'
import { Link } from 'react-router-dom'

export default function CartDeliveryPage() {
    return (
        <>
            <Header />
            <AppBar />
            <section className={style.delivery}>
                <section>
                    <SectionItem title="Entrega" />
                    <Link to="/signUpAdress">
                        <div className={style.cardContainer}>
                            <div className={style.cardWrapper}>
                                <h3 className={style.title}>
                                    Você ainda não informou o endereço
                                </h3>
                                <img className={style.image} src={LocalSvg} />
                                <h3 className={style.subtitle}>
                                    Toque para cadastrar
                                </h3>
                            </div>
                        </div>
                    </Link>
                </section>
                <section>
                    <SectionItem title="Tipo de Pagamento" />
                    <ul>
                        <PaymentCard
                            title="Dinheiro"
                            icon={MoneySvg}
                            checked={true}
                        />
                        <PaymentCard title="Mastercard" icon={MastercardSvg} />
                        <PaymentCard title="Visa" icon={VisaSvg} />
                    </ul>
                </section>
                <CartButton title="Finalizar Pedido" />
            </section>
        </>
    )
}
