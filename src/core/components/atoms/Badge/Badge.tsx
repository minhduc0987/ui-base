import React from 'react'
import style from './Badge.module.scss'

interface BadgeProps {
    label: string
    modifier?: string
}

const Badge = (props: BadgeProps) => {
    return (
        <button className={style.Badge + ' ' + style[`Badge--${props.modifier?.toLowerCase()}`]}>
            {props.label}
        </button>
    )
}

export default Badge
