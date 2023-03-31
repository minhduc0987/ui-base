import React from 'react'
import style from './Checkbox.module.scss'

export interface CheckboxProps {
    isChecked?: boolean
    isDisabled?: boolean
    isInline?: boolean
    label?: string
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <div
            className={style.Checkbox + ' ' + `${props.isInline ? style['Checkbox--inline'] : ''}`}
        >
            <input
                type='Checkbox'
                checked={props.isChecked}
                disabled={props.isDisabled}
                className={style.Checkbox__input}
                readOnly
            />
            <span className={style.Checkbox__icon} aria-label='true' />
            <label className={style.Checkbox__label}>{props.label}</label>
        </div>
    )
}

export default Checkbox
