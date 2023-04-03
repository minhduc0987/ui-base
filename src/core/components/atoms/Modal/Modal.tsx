/* eslint-disable react/display-name */
import React, { forwardRef, ReactNode } from 'react'
import Overlay from '../Overlay'
import style from './Modal.module.scss'

export interface PropsModal {
    onClose?: any
    isOpen: boolean
    isAppendBody?: boolean
    element?: string
    title?: string
    justify?: 'center' | 'start' | 'end'
    align?: 'center' | 'start' | 'end'
    size?: 'xs' | 'md' | 'lg'
    children?: ReactNode
}

const Modal = (props: PropsModal, ref: any) => {
    return props.isOpen ? (
        <>
            <Overlay
                ref={ref}
                isOpen={true}
                onClose={props.onClose}
                isAppendBody={props.isAppendBody}
                element={props.element}
            >
                <div
                    className={`${style['modal-content']}
                     ${style[`modal-${props.size || 'md'}`]}
                     ${style[`modal-${props.align || 'center'}-${props.justify || 'center'}`]}
                    `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={style['modal-header']}>
                        <h4 className={style['modal-title']}>{props.title}</h4>
                    </div>
                    <div className={style['modal-body']}>{props.children}</div>
                    <div className={style['modal-footer']}>
                        <button onClick={props.onClose} className={style['button']}>
                            Close
                        </button>
                    </div>
                </div>
            </Overlay>
        </>
    ) : null
}

// TODO fix read props Storybook
export const ModalComponent = forwardRef(Modal)

export default forwardRef(Modal)
