import CheckedSvg from '@App/assets/checked.svg'
import style from './PaymentCard.module.css'

export default function PaymentCard(props) {
    return (
        <li className={style.container}>
            <div className={style.wrapper}>
                <img className={style.image} src={props.icon} />
                <h3 className={style.title}>{props.title}</h3>
            </div>
            {props?.checked ? (
                <img className={style.checked} src={CheckedSvg} />
            ) : null}
        </li>
    )
}
