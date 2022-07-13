import React from 'react'
import style from './ProductCard.module.css'

export default function ProductCard(props) {
    return (
        <div data-testid="productCard" className={style.card}>
            <img className={style.image} src="foto" />
            <div className={style.content}>
                <div className={style.header}>
                    <h1 className={style.title}>{props.title}</h1>
                    <span
                        className={style.titleInfo}
                    >{`Por Apenas R$ ${props.price}`}</span>
                </div>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}
