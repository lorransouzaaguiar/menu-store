import React from 'react'
import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from '../Menu/Menu'

describe('Test(integration) Component Menu', () => {
    it('should render component with correct data', async () => {
        const { debug, findAllByTestId } = render(<Menu />)
        expect(await findAllByTestId('categoryList')).toHaveLength(4)
        //debug()
    })
})
