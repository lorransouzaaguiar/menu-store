import React from 'react'

export default function ProductCard(props) {
    return (
        <div data-testid="productCard" className="card">
            <img src="foto" />
            <div className="product-content">
                <div>
                    <h1>{props.title}</h1>
                    <p>{`Por Apenas R$ ${props.price}`}</p>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
