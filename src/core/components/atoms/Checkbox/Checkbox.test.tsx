import React from 'react'
import { render } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
    test('renders the Button component', () => {
        render(
            <Checkbox label='Hello world!' isChecked={true} isDisabled={false} isInline={false} />,
        )
    })
})
