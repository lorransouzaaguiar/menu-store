import style from './LocalCard.module.css'
import LocalSvg from '@App/assets/local.svg'
import CheckedSvg from '@App/assets/checked.svg'
export default function LocalCard() {
    return (
        <li className={style.card}>
            <img className={style.image} src={LocalSvg} />
            <div className={style.content}>
                <div className={style.header}>
                    <h3 className={style.color}>Entregar em</h3>
                    <img className={style.icon} src={CheckedSvg} />
                </div>
                <p className={style.adress}>Rua da Silva Pinto, 89</p>
                <p className={style.color}>Parque São Benedito - complememto</p>
            </div>
        </li>
    )
}
