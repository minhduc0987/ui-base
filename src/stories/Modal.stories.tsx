import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ModalComponent, PropsModal } from '../core/components/atoms/Modal/Modal'
import { useArgs } from '@storybook/client-api'

export default {
    title: 'Example/Modal',
    component: ModalComponent,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        title: 'Demo Title',
        children: <span>content</span>,
    },
} as ComponentMeta<typeof ModalComponent>

const Template: ComponentStory<typeof ModalComponent> = (args: PropsModal) => {
    const [{ isOpen }, updateArgs] = useArgs()
    const handleClose = () => {
        updateArgs({ isOpen: !isOpen })
    }
    return (
        <div>
            <button onClick={handleClose}>show Modal</button>
            <ModalComponent {...args} isOpen={isOpen} onClose={handleClose}></ModalComponent>
        </div>
    )
}

export const ModalView = Template.bind({})
