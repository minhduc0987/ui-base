import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconComponent2, { IconName, iconTypes } from '../../core/components/atoms/Icon/Icon'

export default {
    title: 'Components/Atoms/Icon',
    component: IconComponent2,
    argTypes: {},
} as ComponentMeta<typeof IconComponent2>

const Template: ComponentStory<typeof IconComponent2> = (args) => {
    const items = Object.keys(iconTypes).map((item) => {
        const index = item.indexOf('-')
        const brand = item.substring(0, index)
        const name = item.substring(index + 1)
        const result = [brand, name]
        return result
    })
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'start',
                gap: '50px',
                padding: '12px',
                flexWrap: 'wrap',
            }}
        >
            {items.map((item) => {
                return (
                    <div
                        key={item[1]}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <IconComponent2
                            {...args}
                            name={item[1] as IconName}
                            brand={item[0] as any}
                            fill={args.fill}
                        />
                        <div
                            style={{
                                marginTop: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div>brand: {item[0]}</div>
                            <div>name: {item[1]}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const FullIcon = Template.bind({})
