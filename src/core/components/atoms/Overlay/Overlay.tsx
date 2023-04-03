import React, { forwardRef, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import style from './Overlay.module.scss'

export interface OverlayProps {
    isOpen: boolean
    isAppendBody?: boolean
    isClickOutSide?: boolean
    element?: string
    onClose?: () => void
    children?: ReactNode
    blur?: boolean
    ref?: any
    className?: string
}

const Overlay = (props: OverlayProps, ref: any) => {
    const {
        isOpen,
        isAppendBody,
        isClickOutSide = true,
        element = 'root',
        onClose,
        children,
        blur = false,
        className = '',
    } = props
    let rootElement: any = document.getElementById(element)

    if (isAppendBody) {
        rootElement = document.getElementsByTagName('body')[0]
    }
    return isOpen
        ? ReactDOM.createPortal(
              <div
                  ref={ref}
                  className={`${style['overlay-wrapper']} ${
                      blur ? style['blur'] : ''
                  } ${className}`}
                  onClick={() => {
                      isClickOutSide && onClose && onClose()
                  }}
              >
                  {children}
              </div>,
              rootElement,
          )
        : null
}
// TODO fix read props Storybook
export const OverlayComponent = forwardRef(Overlay)

export default forwardRef(Overlay)
