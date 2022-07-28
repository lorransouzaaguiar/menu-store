import QuantityButton from '@Menu/components/QuantityButton/QuantityButton'
import style from './CartItem.module.css'
import { useContext } from 'react'
import { CartContext } from '@Cart/context/cart-context'

export default function CartItem(props) {
    const { increment, decrement } = useContext(CartContext)

    return (
        <div className={style.card}>
            <img className={style.image} src={props.item.imageUrl} />
            <div className={style.info}>
                <h1 className={style.title}>{props.item.title}</h1>
                <div className={style.footer}>
                    <QuantityButton
                        item={props.item}
                        incrementOnClick={() =>
                            increment(props.item.getIncrementUrl())
                        }
                        decrementOnClick={() =>
                            decrement(props.item.getDecrementUrl())
                        }
                        quantity={props.item.qty}
                        style={{ height: '25px', width: '105px' }}
                    />
                    <span className={style.price}>
                        {props.item.price.amount}
                    </span>
                </div>
            </div>
        </div>
    )
}
