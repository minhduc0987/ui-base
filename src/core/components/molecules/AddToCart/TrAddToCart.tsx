import React from 'react'
// import BasketIcon from '../../../icons/basket-plus.svg'
import style from './TrAddToCart.module.scss'
import IconComponent, { IconName } from '../../atoms/Icon/Icon'

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const TrAddToCart = (props: ButtonProps) => {
    return (
        <div className={style['Tr-AddToBasketIcon-container']}>
            <a href='#' className={style['Tr-AddToBasketIcon']} onClick={props.onClick}>
                {/* <BasketIcon className={style.SvgIcon} /> */}
                <IconComponent name={IconName.basket} brand='aeg' />
            </a>
        </div>
    )
}

export default TrAddToCart
