import QuantityButton from '@App/components/QuantityButton/QuantityButton'
import style from './CartCard.module.css'

import sushiJpg from '@App/assets/sushi.jpg'

export default function CartCard() {
    return (
        <div className={style.card}>
            <img className={style.image} src={sushiJpg} />
            <div className={style.content}>
                <h1 className={style.title}>{'Sushi'}</h1>
                <div className={style.footer}>
                    <QuantityButton
                        style={{ height: '25px', width: '105px' }}
                    />
                    <span className={style.info}>{'R$ 35,00'}</span>
                </div>
            </div>
        </div>
    )
}
