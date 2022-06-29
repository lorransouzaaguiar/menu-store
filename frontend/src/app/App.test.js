import React from 'react'
import {describe, it} from '@jest/globals'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.js'

describe('', () => {
    it('', () => {
        const {getByText} = render(<App />)
        expect(getByText('Sushi House')).toBeInTheDocument()
    })
})