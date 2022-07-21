import React from 'react'
import style from './ProductCard.module.css'

export default function ProductCard(props) {
    return (
        <div data-testid="productCard" className={style.card}>
            <img className={style.image} src={props.imageUrl} />
            <div className={style.info}>
                <div className={style.header}>
                    <h1 className={style.title}>{props.title}</h1>
                    <span
                        className={style.price}
                    >{`Por Apenas ${props.price}`}</span>
                </div>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}
