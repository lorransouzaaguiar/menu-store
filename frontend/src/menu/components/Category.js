import React from 'react'

import ProductList from './ProductList'

export default function Category(props) {
    return (
        <section data-testid="categoryList">
            <h2>{props.title}</h2>
            <ul data-testid="productList">
                <ProductList products={props.products} />
            </ul>
        </section>
    )
}
