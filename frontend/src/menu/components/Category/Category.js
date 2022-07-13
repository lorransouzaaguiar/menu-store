import React from 'react'

import ProductList from '@Menu/components/ProductList/ProductList.js'
import style from './Category.module.css'

export default function Category(props) {
    return (
        <section data-testid="categoryList">
            {props?.title ? (
                <h2 className={style.title}>{props.title}</h2>
            ) : null}
            <ul data-testid="productList">
                <ProductList products={props.products} />
            </ul>
        </section>
    )
}
