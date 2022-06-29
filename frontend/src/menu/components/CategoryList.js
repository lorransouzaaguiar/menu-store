import React from 'react'

import Category from './Category'

export default function CategoryList(props) {
    return props.categories.length === 0
        ? 'carregando...'
        : props.categories.map((category) => {
              const { id, description, products } = category
              return (
                  <Category key={id} title={description} products={products} />
              )
          })
}
