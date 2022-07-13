import React from 'react'
import ProductCard from '@Menu/components/ProductCard/ProductCard.js'
import { Link } from 'react-router-dom'

export default function ProductList(props) {
    return (
        <>
            {props.products.map((product) => {
                const { id, title, price, description } = product
                return (
                    <li key={id}>
                        <Link to={`/products/${id}`}>
                            <ProductCard
                                title={title}
                                price={price}
                                description={description}
                            />
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
