import style from './QuantityButton.module.css'

export default function QuantityButton(props) {
    return (
        <div className={style.btn} style={{ ...props.style }}>
            <button>-</button>
            <span>{'1'}</span>
            <button>+</button>
        </div>
    )
}
