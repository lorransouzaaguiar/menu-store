import React from 'react'
import ProductCard from '@Menu/components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'

export default function ProductList(props) {
    return (
        <>
            {props.products.map((product) => {
                const { id, title, price, description, imageUrl } = product
                return (
                    <li key={id}>
                        <Link to={`/products/${id}`}>
                            <ProductCard
                                title={title}
                                price={price}
                                description={description}
                                imageUrl={imageUrl}
                            />
                        </Link>
                    </li>
                )
            })}
        </>
    )
}
