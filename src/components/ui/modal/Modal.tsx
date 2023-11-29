import React from 'react'
import cn from './Modal.module.scss'
import { Portal } from '../portal/Portal'

interface ModalProps {
  children: React.ReactNode
  visible: boolean
  setVisible: (arg: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [cn.modal]

  if (visible) {
    rootClasses.push(cn.active)
  }

  return (
    <>
      <Portal>
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className={cn.modal__wrap} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </Portal>
    </>
  )
}

export default Modal
