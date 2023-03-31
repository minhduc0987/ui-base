import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../../core/components/atoms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Atoms/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'Choose color to change background color.',
        },
        borderColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
    label: 'Primary',
}

export const Secondary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    type: 'secondary',
    label: 'Secondary',
}

export const Disabled = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    type: 'disabled',
    label: 'Disabled',
}
