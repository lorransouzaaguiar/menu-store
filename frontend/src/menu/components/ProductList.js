import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList(props) {
    return (
        <>
            {props.products.map((product) => {
                const { id, title, price, description } = product
                return (
                    <li key={id}>
                        <ProductCard
                            title={title}
                            price={price}
                            description={description}
                        />
                    </li>
                )
            })}
        </>
    )
}
