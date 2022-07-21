import { Link, useNavigate } from 'react-router-dom'
import style from './CartButton.module.css'

export default function CartButton(props) {
    const navigate = useNavigate()

    return (
        <button
            className={style.button}
            onClick={() => {
                const route = props.to ? props.to : ''
                navigate(route)
            }}
        >
            {props.title}
        </button>
    )
}
