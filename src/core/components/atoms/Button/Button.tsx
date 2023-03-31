import React from 'react'
import style from './Button.module.scss'

interface ButtonProps {
    label: string
    type?: 'primary' | 'disabled' | 'secondary'
    backgroundColor?: string
    borderColor?: string
}

const Button = ({ label, type, backgroundColor, borderColor }: ButtonProps) => {
    const btnType = type ? type : ''
    return (
        <div className={style['TrButton-wrapper']}>
            <button
                style={{ backgroundColor, borderColor }}
                type='button'
                className={[style.TrButton, style[`TrButton--${btnType}`]].join(' ')}
            >
                {label}
            </button>
        </div>
    )
}

export default Button
