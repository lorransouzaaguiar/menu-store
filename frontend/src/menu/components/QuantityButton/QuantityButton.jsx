import styles from './QuantityButton.module.css'

export default function QuantityButton(props) {
    return (
        <div className={styles.container} style={{ ...props.style }}>
            <button className={styles.button} onClick={props.decrementOnClick}>
                -
            </button>
            <span className={styles.quantity}>{props.quantity}</span>
            <button className={styles.button} onClick={props.incrementOnClick}>
                +
            </button>
        </div>
    )
}
