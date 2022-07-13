import React from 'react'
import '@testing-library/jest-dom'
import Cart from '@Cart/components/Cart/Cart'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Test(Integration) Cart', () => {
    it('should render a Cart Component', async () => {
        const { debug } = render(<Cart />)
        expect(await screen.findByTestId('cartList')).toBeInTheDocument()
        expect(await screen.findAllByTestId('cartItem')).toHaveLength(3)
        expect(
            await screen.findByText('valor do pedido: 2.6')
        ).toBeInTheDocument()
        expect(
            await screen.findByText('Taxa de entrega: 0')
        ).toBeInTheDocument()
        expect(
            await screen.findByText('Total da compra: 2.6')
        ).toBeInTheDocument()
    })
})

describe('Test(e2e) Cart', () => {
    it('should increment an item in a list of items in cart', async () => {
        const { debug } = render(<Cart />)

        expect(
            await screen.findByText('valor do pedido: 2.6')
        ).toBeInTheDocument()

        userEvent.click(await screen.findByTestId('inc 1'))

        await waitFor(async () => {
            expect(await screen.findByTestId('item-1-qty')).toHaveTextContent(
                '3'
            )
            expect(
                await screen.findByText('valor do pedido: 7.8')
            ).toBeInTheDocument()
            expect(
                await screen.findByText('Taxa de entrega: 0')
            ).toBeInTheDocument()
            expect(
                await screen.findByText('Total da compra: 7.8')
            ).toBeInTheDocument()
        })
    })
    it('should decrement an item in a list of items in cart', async () => {
        const { debug } = render(<Cart />)

        userEvent.click(await screen.findByTestId('dec 1'))

        await waitFor(async () => {
            expect(await screen.findByTestId('item-1-qty')).toHaveTextContent(
                '2'
            )

            expect(
                await screen.findByText('valor do pedido: 5.2')
            ).toBeInTheDocument()
            expect(
                await screen.findByText('Taxa de entrega: 0')
            ).toBeInTheDocument()
            expect(
                await screen.findByText('Total da compra: 5.2')
            ).toBeInTheDocument()
        })
    })
})
