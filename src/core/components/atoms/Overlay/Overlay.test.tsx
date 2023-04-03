import React from 'react'
import { render } from '@testing-library/react'

import Overlay from './Overlay'

describe('Overlay', () => {
    test('renders the Overlay component', () => {
        render(<Overlay isOpen={true} />)
    })
})
