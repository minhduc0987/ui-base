import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OverlayComponent, { OverlayProps } from '../core/components/atoms/Overlay/Overlay'
import { useArgs } from '@storybook/client-api'

export default {
    title: 'Example/Overlay',
    component: OverlayComponent,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: (
            <div>
                <h1>Fullscreen Overlay Demo</h1>
                <p>This is just an example full screen overlay. Click to close the overlay.</p>
            </div>
        ),
        isAppendBody: true,
        blur: true,
    },
} as ComponentMeta<typeof OverlayComponent>

const Template: ComponentStory<typeof OverlayComponent> = (args: OverlayProps) => {
    const [{ isOpen = false }, updateArgs] = useArgs()
    const handleClose = () => {
        updateArgs({ isOpen: !isOpen })
    }

    return (
        <div id='container'>
            <h1>Overlays in ReactJS</h1>
            <div id='menu'>
                <button onClick={handleClose}>Click to show Overlay</button>
            </div>
            <OverlayComponent {...args} isOpen={isOpen} onClose={handleClose}></OverlayComponent>
        </div>
    )
}

export const OverlayDemo = Template.bind({})
