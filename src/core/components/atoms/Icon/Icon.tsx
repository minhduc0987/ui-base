import React from 'react'

type IconTypes = { [name: string]: ReactSVGComponent }

// aeg
import { ReactComponent as AegDaysReturn } from '../../../icons/aeg/100-days-return.svg'
import { ReactComponent as AegAeg } from '../../../icons/aeg/aeg.svg'
import { ReactComponent as AegBasket } from '../../../icons/aeg/basket.svg'
import { ReactComponent as AegCategoryAccessories } from '../../../icons/aeg/category-accessories.svg'
import { ReactComponent as AegCategoryAirComfort } from '../../../icons/aeg/category-air-comfort.svg'
import { ReactComponent as AegCategoryCooking } from '../../../icons/aeg/category-cooking.svg'
import { ReactComponent as AegCategoryCooling } from '../../../icons/aeg/category-cooling.svg'
import { ReactComponent as AegCategoryDishwashing } from '../../../icons/aeg/category-dishwashing.svg'

// electrolux
import { ReactComponent as ElecCompareArrow } from '../../../icons/electrolux/compare-arrow.svg'

export const iconTypes: IconTypes = {
    // aeg
    'aeg-dayReturn': AegDaysReturn,
    'aeg-aeg': AegAeg,
    'aeg-basket': AegBasket,
    'aeg-categoryAccessories': AegCategoryAccessories,
    'aeg-categoryAirComfort': AegCategoryAirComfort,
    'aeg-categoryCooking': AegCategoryCooking,
    'aeg-categoryCooling': AegCategoryCooling,
    'aeg-categoryDishwashing': AegCategoryDishwashing,

    // elec
    'electrolux-compareArrow': ElecCompareArrow,
}
export enum IconName {
    // aeg
    dayReturn = 'dayReturn',
    aeg = 'aeg',
    basket = 'basket',
    categoryAccessories = 'categoryAccessories',
    categoryAirComfort = 'categoryAirComfort',
    categoryCooking = 'categoryCooking',
    categoryCooling = 'categoryCooling',
    categoryDishwashing = 'categoryDishwashing',

    // elect
    compareArrow = 'compareArrow',
}
interface IProps {
    name: IconName
    brand: 'electrolux' | 'aeg' | 'zanussi'
    inline?: boolean
    classes?: string
    width?: number
    height?: number
    fill?: string
}
const IconComponent = (props: IProps) => {
    const { name, width = 24, height = 24, classes, brand = 'aeg', fill } = props
    const Icon = iconTypes[`${brand}-${name}`]
    return <Icon width={width} height={height} className={classes || ''} fill={fill} />
}

export default IconComponent

export const IconComponent2 = IconComponent
