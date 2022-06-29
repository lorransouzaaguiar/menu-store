import React from 'react'
import ProductCard from '../components/ProductCard'

export default function CategoryList(props) {
    const renderProductList = () =>
        props.products.map((product) => {
            const { key, title, price, description } = product
            return (
                <li key={key}>
                    <ProductCard
                        title={title}
                        price={price}
                        description={description}
                    />
                </li>
            )
        })

    return (
        <section data-testid="categoryList">
            <h2>{props.title}</h2>
            <ul data-testid="productList">{renderProductList()}</ul>
        </section>
    )
}
