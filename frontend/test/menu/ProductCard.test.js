import React from 'react'
import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from './index.js'

describe('ProductCard', () => {
    it('should render component with correct props', () => {
        const { getByTestId } = render(
            <ProductCard title="Combo" price={22} description={'descrição'} />
        )
        expect(getByTestId('productCard')).toHaveTextContent('Combo')
        expect(getByTestId('productCard')).toHaveTextContent('22')
        expect(getByTestId('productCard')).toHaveTextContent('descrição')
    })
})
